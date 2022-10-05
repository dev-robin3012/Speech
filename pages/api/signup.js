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

    const accessToken = jwt.sign(saveUser._doc, 'secret', { expiresIn: '5m' });
    const refreshToken = jwt.sign(
      saveUser._doc,
      'fbf8a6c2b878d5060a87a25f4fbe3b9b36f5c876',
      { expiresIn: '1h' }
    );

    const message = {
      from: `"Speech" <${process.env.smtp_email}>`,
      to: req.body.email,
      subject: 'Verify User',
      html: emailTemplate(req.body.name, otp),
    };

    // await transporter.sendMail(message);

    return res.status(201).send({
      message: 'Sign Up Successful.',
      user: { ...saveUser._doc, accessToken, refreshToken },
    });
  } catch (error) {
    res.status(500).send('Something wrong in server. Try again...');
    console.log(error);
  }
};

export default handleSignup;
