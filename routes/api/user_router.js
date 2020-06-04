/*
 * IMT-project
 */

const Router = require("koa-router");
// const pagexray = require("pagexray");
const router = new Router();
const user_controller = require("./../../app/controllers/user_controller");

router.post("/getneedfile", user_controller.getneedfile);

module.exports = router;
