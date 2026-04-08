import mongoose, { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  game: { type: String }, // Optional: which game are they reporting?
  message: { type: String, required: true },
  status: { type: String, default: 'new' } // new, pending, resolved
}, { timestamps: true });

export const Message = models.Message || model("Message", MessageSchema);