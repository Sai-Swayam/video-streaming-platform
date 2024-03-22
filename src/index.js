import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})


connectDB();








/*
    // The code below is the first approach to connect to the database using mongoose    

    // we can connect to the database in a single line of code, but this approach is not reccomended
    // also, use async await and try catch to connect to the database, as the database might be present 
       in a different continent and might take time to connect
    

    import express from "express";
    const app = express();

    (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;
        });

        app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
    })();

*/
