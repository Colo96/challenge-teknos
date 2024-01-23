const path = require("path");
const FoldersModel = require("../schemas/folders.schema");
const FoldersManager = require("../../manager/folders/FoldersManager");
const foldersFilePath = path.resolve(__dirname, "../../data/folders.json");
const manageFolders = new FoldersManager(foldersFilePath);

class FoldersDAO {
  async addFolders() {
    const folders = await manageFolders.getFolders();
    const generatedFolders = await FoldersModel.create(folders);
    return generatedFolders;
  }
  async getFolders() {
    const folders = await FoldersModel.find().lean();
    return folders;
  }
}

module.exports = FoldersDAO;
