import mongoose from "mongoose";

export async function connectTodb() {
  try {
    const result = await mongoose.connect(
      "mongodb+srv://tanya:tanya@cluster0.xgwamlc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to db");
  } catch (err) {
    console.log("oh noo error");
  }
}
