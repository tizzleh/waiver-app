// User.ts
import mongoose, { Document, Schema, Model } from 'mongoose'

interface IUser extends Document {
  name: string;
  email: string;
  username: string;
  password: string;
  creationDate: Date;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the user.'],
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  email: {
    type: String,
    required: [true, "Please provide the user's email"],
    maxlength: [100, "Email cannot be more than 100 characters"],
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    maxlength: [60, "Username cannot be more than 60 characters"],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password for the user.'],
    maxlength: [100, 'Password cannot be more than 100 characters'],
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
})

export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

