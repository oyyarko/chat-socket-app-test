import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL_PATH);
    console.log("Connected Successfully!");
  } catch (error) {
    console.log("Error connecting mongodb ", error);
  }
};

export default connectToMongoDB;
