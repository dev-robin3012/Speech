import { CourierClient } from '@trycourier/courier';
import dbConnection from '../../lib/db.connection';
import User from '../../model/user.model';

const courier = CourierClient({
  authorizationToken: process.env.COURIER_TOKEN,
});

const handleAuth = async (req, res) => {
  await dbConnection();

  try {
    const user = await User.findOne({ phone: req.body.phone });

    if (user) return res.status(200).send({ credentials: user });

    const response = await courier.send({
      message: {
        to: {
          phone_number: req.body.phone,
        },
        template: 'NHG40XN35K4DG9H2PS4MCS7WQMJG',
        data: {
          recipientName: 'Shahadat Robin',
        },
      },
    });

    console.log(response);

    // const user = await User.create(req.body);
    return res
      .status(201)
      .send({ message: 'User Created Successfully.', credentials: user });
  } catch (error) {
    res.status(500).send('Server error');
    console.log('auth error:', error);
  }
};

// const sendVerificationMessage = (params, mobileNumber) => {
//   return courier.send({
//     message: {
//       to: {
//         data: params,
//         phone_number: mobileNumber,
//       },
//       content: {
//         title: 'XYZ Verification',
//         body: 'Hi {{name}},\nYour verification code for XYZ is {{otp}}.',
//       },
//       routing: {
//         method: 'single',
//         channels: ['sms'],
//       },
//     },
//   });
// };

export default handleAuth;
