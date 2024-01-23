const { Router } = require("express");
const MessagesController = require("../../controllers/messages.controller");
const router = Router();

router.post("/important", MessagesController.addMessages);
router.get("/important", MessagesController.getMessages);
router.get("/important/params", MessagesController.getMessagesByParams);
router.post("/important/create", MessagesController.createMessage);
router.delete("/important/:id", MessagesController.deleteMessage);

module.exports = router;
