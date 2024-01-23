const getDAOS = require("../models/daos/index.dao");

const { messagesDAO } = getDAOS();

class MessagesService {
  async addMessages() {
    const messages = await messagesDAO.addMessages();
    return messages;
  }
  async getMessages() {
    const messages = await messagesDAO.getMessages();
    return messages;
  }
  async createMessage(payload) {
    if (!payload) {
      console.error("Missing params");
    }
    const newMessage = await messagesDAO.createMessage(payload);
    if (!newMessage) {
      onsole.error("Message not created");
    }
    return newMessage;
  }
  async deleteMessageById(messageId) {
    if (!messageId) {
      console.error("Missing params");
    }
    return await messagesDAO.deleteMessage(messageId);
  }
}

module.exports = MessagesService;
