import mongoose from 'mongoose'

export const connectDB = async () => {
        try {
            await mongoose.connect('mongodb://localhost/portfoliodb');
            console.log('MongoDB Connected')
        }
        catch (error) {
            console.log(error);
        }
};