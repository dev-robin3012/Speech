import { model, Schema } from 'mongoose';

const userModel = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    avatar: { type: String, default: '' },
    isVerified: { type: Boolean, default: false },
    verifyToken: String,
  },
  { timestamps: true }
);

const User = model('User', userModel);
export default User;
