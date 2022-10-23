import jwt from 'jsonwebtoken';
import emailTemplate from '../../assets/emailTemplate';
import checkTokenValidity from '../../helpers/checkTokenValidity';
import otpGenerate from '../../helpers/otpGenerate';
import dbConnection from '../../lib/db.connection';
import transporter from '../../lib/mailTransporter';
import User from '../../model/user.model';

const sendVerificationCode = async (req, res) => {
  await dbConnection();

  try {
    const { status, message, user } = await checkTokenValidity(
      req.headers['authorization'],
      process.env.ACCESS_TOKEN_SECRET
    );

    if (status !== 200) throw { status, message };

    const userInDB = await User.findById(req.query.user);

    const exactMatch = user._id === userInDB?._id.toString();

    if (!userInDB || !exactMatch) {
      throw {
        status: 401,
        message: 'Attempt with wrong credentials.',
      };
    }

    if (req.body) {
      const { otp } = req.body;
      const { status, user } = await checkTokenValidity(
        `Bearer ${userInDB.verifyToken}`,
        process.env.OTP_SECRET
      );

      if (status !== 200) throw { status, message: 'otp expired' };

      if (otp !== String(user.otp))
        throw { status: 406, message: 'Invalid Code.' };

      await User.findByIdAndUpdate(
        req.query.user,
        {
          $set: { isVerified: true },
          $unset: { verifyToken: '' },
        },
        { new: true }
      );

      return res.status(202).send('Verification successful.');
    } else {
      const otp = await otpGenerate();

      const email = {
        from: `"Speech" <${process.env.smtp_email}>`,
        to: userInDB.email,
        subject: 'Verify User',
        html: emailTemplate(userInDB.name, otp),
      };

      await transporter.sendMail(email);

      const verifyToken = await jwt.sign({ otp }, process.env.OTP_SECRET, {
        expiresIn: process.env.OTP_EXPIRE,
      });

      await User.findByIdAndUpdate(
        req.query.user,
        { verifyToken },
        { new: true }
      );

      return res
        .status(200)
        .send(`We sent you a verification code to ${userInDB.email}`);
    }
  } catch ({ status, message }) {
    return res.status(status).send(message);
    // console.log({ verifyErr: error });
  }
};

export default sendVerificationCode;
