const { default: mongoose } = require('mongoose');

const userModel = new mongoose.Schema(
  {
    phone: { type: String, required: true, unique: true },
    name: String,
    user_id: String,
    avatar: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userModel) || mongoose.models.User;
export default User;
