const { Router } = require("express");
const router = Router();

const foldersRouter = require("./folders/folders.router");
const messagesRouter = require("./messages/messages.router");

router.use("/folders", foldersRouter);
router.use("/messages", messagesRouter);

module.exports = router;
