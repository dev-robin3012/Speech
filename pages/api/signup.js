import { hash } from 'bcrypt';
import emailTemplate from '../../assets/emailTemplate';
import dbConnection from '../../lib/db.connection';
import transporter from '../../lib/mailTransporter';
import User from '../../model/user.model';
import otpGenerate from '../../utils/otpGenerate';

const handleSignup = async (req, res) => {
  await dbConnection();

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user && user.isVerified)
      return res
        .status(409)
        .send({ message: 'This email is already registered.' });

    const otp = otpGenerate();

    const hashPass = await hash('robin123', 10);

    const saveUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPass,
      isVerified: false,
    });

    const message = {
      from: `"Speech" <${process.env.smtp_email}>`,
      to: 'sh.robin025@gmail.com',
      subject: 'Verify User',
      html: emailTemplate(req.body.name, otp),
    };

    const result = await transporter.sendMail(message);

    // console.log(result);

    return res.status(201).send({ message: 'User Created Successfully.' });
  } catch (error) {
    res.status(500).send('Server error');
    console.log('auth error:', error);
  }
};

export default handleSignup;
