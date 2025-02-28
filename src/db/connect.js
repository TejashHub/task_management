import mongoose from "mongoose";

const connectDB = async (MONGODB_URI, DB_NAME) => {
  try {
    const connect = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    if (connect) {
      console.log(`MongoDB connected Successfully!!`);
    }
  } catch (error) {
    console.error("MongoDB connected Failed!!`:", error);
    process.exit(1);
  }
};

export default connectDB;
