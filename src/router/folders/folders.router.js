const { Router } = require("express");
const FoldersController = require("../../controllers/folders.controller");
const router = Router();

router.post("/", FoldersController.addFolders);
router.get("/", FoldersController.getFolders);

module.exports = router;
