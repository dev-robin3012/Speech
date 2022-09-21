import { createTransport } from 'nodemailer';
import dbConnection from '../../lib/db.connection';
import User from '../../model/user.model';

const transporter = createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: process.env.smtp_email,
    pass: process.env.smtp_pass,
  },
});

const handleSignup = async (req, res) => {
  await dbConnection();

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user)
      return res
        .status(409)
        .send({ message: 'This email is already registered.' });

    const message = {
      from: `"Speech" <${process.env.smtp_email}>`,
      to: 'sh.robin025@gmail.com',
      subject: 'Verify User',
      html: `<div style="font-size:18px;">
      <p>Hi ${req.body.name}!</p>

      <p>Your verification code is</p>
      <p style="font-size:25px;">456987</p>

      <p>
        Enter this code in our [website or app] to activate your account.
      </p>

      <p>Click here [open code in app] to open the [app/portal landing page].</p>

      <p>
        If you have any questions, send us an email to support team.
      </p>
      
      <p style="margin:0;">We’re glad you’re here!</p>

      <br/>
      <p>The Speech team</p>
      </div>`,
    };

    const result = await transporter.sendMail(message);

    console.log(result);

    return res.status(201).send({ message: 'User Created Successfully.' });
  } catch (error) {
    res.status(500).send('Server error');
    console.log('auth error:', error);
  }
};

export default handleSignup;
