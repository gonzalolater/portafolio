import mongoose from 'mongoose'

export const connectDB = async () => {
        try {
            await mongoose.connect('mongodb+srv://<user>:<password>@portfolio.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000');
            console.log('MongoDB Connected')
        }
        catch (error) {
            console.log(error);
        }
};