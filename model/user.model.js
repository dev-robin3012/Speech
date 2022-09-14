import { model, Schema } from 'mongoose';

const userModel = new Schema(
  {
    phone: { type: String, required: true, unique: true },
    name: String,
    user_id: String,
    avatar: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = model('User', userModel);
export default User;
