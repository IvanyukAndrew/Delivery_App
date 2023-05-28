import mongoose from "mongoose";

const GoodModel = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    shop: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Good", GoodModel);
