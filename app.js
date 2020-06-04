/*
 * IMT-project
 */

const Koa = require("koa");
const config = require("./config");
// const pagexray = require("pagexray");

// https://www.npmjs.com/package/koa2-cors
const cors = require("koa2-cors");

// https://www.npmjs.com/package/koa-bodyparser
const bodyParser = require("koa-bodyparser");

// https://github.com/Automattic/mongoose
// const mongoose = require("mongoose");

const app = new Koa();

// mongoose.connect(
//   config.db,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     if (err) {
//       // console.error('Failed to connect to database');
//       console.log(err);
//     } else {
//       console.log("Connecting database successfully");
//     }
//   }
// );

app.use(cors());
app.use(bodyParser());

const user_router = require("./routes/api/user_router");

app.use(user_router.routes()).use(user_router.allowedMethods());

app.listen(config.port);
