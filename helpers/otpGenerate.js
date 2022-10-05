const otpGenerate = () => {
  let otp = Math.floor(Math.random() * 900000);
  otp = otp.toString().length < 6 ? otpGenerate() : otp;
  return otp;
};

export default otpGenerate;
