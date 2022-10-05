import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import emailTemplate from '../../assets/emailTemplate';
import otpGenerate from '../../helpers/otpGenerate';
import dbConnection from '../../lib/db.connection';
import User from '../../model/user.model';

const handleSignup = async (req, res) => {
  await dbConnection();

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) return res.status(409).send('This email is already registered.');

    const otp = await otpGenerate();

    // const verifyToken = await hash(otp.toString(), 10);
    const hashPass = await hash(req.body.password, 10);

    const saveUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPass,
    });

    delete saveUser._doc.password;

    const accessToken = jwt.sign(saveUser._doc, 'secret', { expiresIn: '1m' });

    const message = {
      from: `"Speech" <${process.env.smtp_email}>`,
      to: req.body.email,
      subject: 'Verify User',
      html: emailTemplate(req.body.name, otp),
    };

    // await transporter.sendMail(message);

    return res.status(201).send({
      message: 'Sign Up Successful.',
      user: { ...saveUser._doc, accessToken },
    });
  } catch (error) {
    res.status(500).send('Something wrong in server. Try again...');
    console.log(error);
  }
};

export default handleSignup;
