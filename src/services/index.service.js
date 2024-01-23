const FoldersService = require("./folders.service");
const MessagesService = require("./messages.service");

const foldersService = new FoldersService();
const messagesService = new MessagesService();

const getSERVICES = () => {
  return {
    foldersService,
    messagesService,
  };
};

module.exports = getSERVICES;
