const FoldersDAO = require("./folders.dao");
const MessagesDAO = require("./messages.dao");

const foldersDAO = new FoldersDAO();
const messagesDAO = new MessagesDAO();

const getDAOS = () => {
  return {
    foldersDAO,
    messagesDAO,
  };
};

module.exports = getDAOS;
