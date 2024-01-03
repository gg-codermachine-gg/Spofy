import mongoose from "mongoose";

// how to connect to MongoDB with a  reconnect option incase of failing 

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
    const retryInterval = 1000; 

    while (true) {
      try {
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log("Reconnected to database");
        break;
      } catch (error) {
        console.error("Failed to reconnect:", error);
        
        await new Promise((resolve) => setTimeout(resolve, retryInterval));
      }
    }
  }
};
