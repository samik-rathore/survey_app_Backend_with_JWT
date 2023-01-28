import mongoose from 'mongoose';

class MongoUtils {

    static getMongoUri() {
        const username = process.env.DB_USERNAME;
        const password = process.env.DB_PASSWORD;
        const db = process.env.DB_DATABASE;
        return `mongodb+srv://${username}:${password}@cluster0.hbo6q0a.mongodb.net/?retryWrites=true&w=majority`;
    }

    static async connect() {
       try {
        const mongoUri = this.getMongoUri();
        await mongoose.connect(mongoUri);
       }
       catch(err) {
           throw new Error(err);
       }
    }
}

export default MongoUtils;