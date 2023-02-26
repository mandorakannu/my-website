import mongoose from 'mongoose';
// disconnect with mongoDB in mongoose
export default async function disconnect() {
    await mongoose.disconnect();
    }
