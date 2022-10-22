import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db connected');
  } catch (error) {
    console.log('db connection failed', error);
  }
};

export default dbConnection;
