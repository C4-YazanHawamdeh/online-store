const express = require("express");
require("dotenv").config();
const cors = require("cors");
// require("./db/db");

//routers

const app = express();

//built-in middleware
app.use(express.json());
app.use(cors());

//importing routers
const rolesRouter = require("./routes/roles");
const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");

const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");



// router middleware
app.use("/roles", rolesRouter);
app.use("/login", loginRouter);
app.use("/users", usersRouter);

app.use("/products", productsRouter);

app.use("/carts", cartsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
