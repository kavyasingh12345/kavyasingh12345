// const express = require("express");
// const app = express();


// app.use(cors());
// app.use(express.json());
// const cookieParser = require("cookie-parser");
// const path = require("path");
// const db = require("./config/mongoose_connection");
// const expressSession = require("express-session");
// const flash = require("connect-flash");
// require("dotenv").config();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");

// app.use(
//   expressSession({
//     resave : false ,
//     saveUninitialized : false , 
//     secret : process.env.EXPRESS_SESSION_SECRET,
//   })
// );

// app.use(flash());

// const ownersRouter = require("./routes/ownersRouter");
// const usersRouter = require("./routes/usersRouter");
// const productsRouter = require("./routes/productsRouter");
// const indexRouter = require("./routes/index");

// app.use("/" , indexRouter);
// app.use("/owners", ownersRouter);
// app.use("/users", usersRouter);
// app.use("/products", productsRouter);

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});