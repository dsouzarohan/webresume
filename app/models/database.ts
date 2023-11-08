import mongoose from "mongoose";
import { MongoURI } from "../config/config";

const connection: {
    isConnected?: mongoose.ConnectionStates
} = {}

const mongoConnect = async () => {
    if(connection.isConnected) return;

    try {
        const db = await mongoose.connect(MongoURI);
        console.log("Connected to",db.connection.db.databaseName)
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log("Could not connect to database", error)
    }
}

export default mongoConnect;