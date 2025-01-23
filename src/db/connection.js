import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log('Database connected');

        return connection;
    }
    catch (error) {
        console.error('Database connection failed with error: ');
        console.error(error);
    }
};

export default connectToDatabase;