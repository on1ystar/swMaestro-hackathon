// DB connection
import mongoose from "mongoose";

const dbName = "test";

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => console.log("✅ Connected to DB"));
db.on("error", (error) => console.log("❌ Connection error. "));
db.on("disconnected", () => console.log("❗ Lost connection to DB server"));
