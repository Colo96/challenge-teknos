const getSERVICES = require("../services/index.service");

const { foldersService } = getSERVICES();

class FoldersController {
  static async addFolders(req, res, next) {
    try {
      const folders = await foldersService.addFolders();
      const response = {
        success: true,
        folders,
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  static async getFolders(req, res, next) {
    try {
      const folders = await foldersService.getFolders();
      const response = {
        success: true,
        folders,
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FoldersController;
