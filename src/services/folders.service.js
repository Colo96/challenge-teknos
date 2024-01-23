const getDAOS = require("../models/daos/index.dao");

const { foldersDAO } = getDAOS();

class FoldersService {
  async addFolders() {
    const folders = await foldersDAO.addFolders();
    return folders;
  }
  async getFolders() {
    const folders = await foldersDAO.getFolders();
    return folders;
  }
}

module.exports = FoldersService;
