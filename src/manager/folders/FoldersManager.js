const fs = require("fs/promises");
const { existsSync } = require("fs");

class FoldersManager {
  constructor(path) {
    this.path = path;
  }

  async getFolders() {
    if (existsSync(this.path)) {
      const data = await fs.readFile(this.path, "utf-8");
      const folders = JSON.parse(data);
      return folders;
    } else {
      return [];
    }
  }
}

module.exports = FoldersManager;
