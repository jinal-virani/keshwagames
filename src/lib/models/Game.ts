import mongoose, { Schema, model, models } from "mongoose";

const GameSchema = new Schema({
  lable: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  thumbnail: String,
  category: [String],
  links: {
    ios: String,
    android: String
  },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

export const Game = models.Game || model("Game", GameSchema);