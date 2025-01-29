import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();

app.use(express.json()); // Allow parsing JSON data
connectDB();

const __dirname = path.resolve(); // Fix __dirname

app.use("/api/products", productRoutes);

// **Serve frontend in production mode**
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));











// import express from "express";
// import path from "path";
// import dotenv from "dotenv";
// import { fileURLToPath } from "url"; // ✅ Fix for ES modules
// import { connectDB } from "./config/db.js";
// import productRoutes from "./routes/product.route.js";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Fix for __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.json()); // Allow JSON data

// // ✅ API Routes
// app.use("/api/products", productRoutes);

// // ✅ Serve Frontend in Production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "frontend", "dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running...");
//   });
// }

// // ✅ Connect to Database and Start Server
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("❌ Failed to connect to DB:", error);
//     process.exit(1);
//   });












// import express from "express";
// import path from "path";
// import dotenv from "dotenv";
// import { fileURLToPath } from "url"; // ✅ Fix for ES modules
// import { connectDB } from "./config/db.js";
// import productRoutes from "./routes/product.route.js";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Fix for __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.json()); // Allow JSON data

// // ✅ API Routes
// app.use("/api/products", productRoutes);

// // ✅ Serve Frontend in Production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "frontend", "dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running...");
//   });
// }

// // ✅ Connect to Database and Start Server
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("❌ Failed to connect to DB:", error);
//     process.exit(1);
//   });









// import express from "express";
// import path from "path";
// import dotenv from "dotenv";
// import { fileURLToPath } from "url"; // ✅ Fix for ES modules
// import { connectDB } from "./config/db.js";
// import productRoutes from "./routes/product.route.js";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Fix for __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.json()); // Allow JSON data

// // ✅ Default route to fix "Not Found" issue
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // ✅ API Routes
// app.use("/api/products", productRoutes);

// // ✅ Fix for serving static files in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "frontend", "dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// }

// // ✅ Ensure DB connects before starting the server
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("❌ Failed to connect to DB:", error);
//     process.exit(1);
//   });





// It is also working
// import express from "express";
// import path from "path";
// import dotenv from "dotenv";
// import { fileURLToPath } from "url"; // ✅ Fix for ES modules
// import { connectDB } from "./config/db.js";
// import mongoose from "mongoose";
// import productRoutes from "./routes/product.route.js";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Fix for __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.json()); // Allow JSON data

// // Routes
// app.use("/api/products", productRoutes);

// // ✅ Fix for production static files
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "frontend", "dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// }

// // ✅ Ensure DB connects before server starts
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("❌ Failed to connect to DB:", error);
//     process.exit(1);
//   });
















// good codes




// import express from "express";
// const app = express();
// import path from "path";
// import dotenv from "dotenv";
// import Product from "./models/product.model.js";
// // const data = require("./config/db");
// dotenv.config();
// import { connectDB } from "./config/db.js";
// import mongoose from "mongoose";
// import productRoutes from "./routes/product.route.js"

// app.use(express.json()); //allow us to accept json data in the body.
// const PORT = process.env.PORT || 5000;

// const __dirname = path.resolve;

// app.use("/api/products",productRoutes);

// if(process.env.NODE_ENV === "production"){
//   app.use(express.static(path.join(__dirname,"/frontend/dist")));
  
//   app.get("*", (req,res) =>{
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   })
// }

// app.listen(PORT,()=>{
//     connectDB();
//     console.log("Server started at http://localhost:5000");
// });


// console.log(process.env.MONGO_URI);

// app.get('/',(req,res)=>{
//     res.send("This is main server.");
// })



