import express from "express";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
});