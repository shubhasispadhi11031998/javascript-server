import { mongo, Mongoose } from "mongoose";

import * as mongoose from 'mongoose';
import { promises } from "fs";
import { resolve } from "path";
import SeedData from "./SeedData";

class Database {
    static open(MONGO_URL) {
        console.log(MONGO_URL);
        return new Promise((resolve, reject) => {
            console.log("Inside open method");
            mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                SeedData();
                resolve(null);
            })
            // console.log("Successfully connected to Mongo");


        });
    }
    static disconnect() {
        console.log("Inside disconnect methode");
    }
}
export default Database;
