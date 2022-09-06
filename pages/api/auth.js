import { CourierClient } from '@trycourier/courier';
import dbConnection from '../../lib/db.connection';
import vonage from '../../lib/vonage.init';
import User from '../../model/user.model';

const courier = CourierClient({
  authorizationToken: process.env.COURIER_TOKEN,
});

const handleAuth = async (req, res) => {
  await dbConnection();

  try {
    const user = await User.findOne({ phone: req.body.phone });

    console.log({ user });
    if (user) return res.status(200).send({ credentials: user });

    await vonage.verify.request(
      { number: req.body.phone, brand: 'Vonage' },
      (err, result) => {
        if (err) {
          console.error('sending err:', err);
        } else {
          const verifyRequestId = result.request_id;
          console.log('request_id', verifyRequestId);
        }
      }
    );

    // const response = await courier.send({
    //   message: {
    //     to: {
    //       phone_number: req.body.phone,
    //     },
    //     template: 'NHG40XN35K4DG9H2PS4MCS7WQMJG',
    //     data: {
    //       recipientName: 'Shahadat Robin',
    //     },
    //   },
    // });

    // console.log(response);

    return res.status(201).send({ message: 'User Created Successfully.' });
  } catch (error) {
    res.status(500).send('Server error');
    console.log('auth error:', error);
  }
};

export default handleAuth;
