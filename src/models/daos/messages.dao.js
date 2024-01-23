const path = require("path");
const MessagesModel = require("../schemas/messages.schema");
const MessagesManager = require("../../manager/messages/MessagesManager");
const messagesFilePath = path.resolve(__dirname, "../../data/important.json");
const manageMessages = new MessagesManager(messagesFilePath);
const { ObjectId } = require("mongodb");

class MessagesDAO {
  async addMessages() {
    const messages = await manageMessages.getMessages();
    const generatedMessages = await MessagesModel.create(messages);
    return generatedMessages;
  }
  async getMessages() {
    const messages = await MessagesModel.find().lean();
    return messages;
  }
  async createMessage(payload) {
    await manageMessages.addMessage(payload);
    const existingMessage = await MessagesModel.findOne();

    if (existingMessage) {
      existingMessage.data.push(payload);

      const updatedMessage = await existingMessage.save();

      return updatedMessage;
    } else {
      const newMessage = new MessagesModel({ data: [payload] });
      const savedMessage = await newMessage.save();

      return savedMessage;
    }
  }
  async deleteMessage(messageId) {
    const result = await MessagesModel.updateOne(
      { "data._id": new ObjectId(messageId) },
      { $pull: { data: { _id: new ObjectId(messageId) } } }
    );

    return result;
  }
}

module.exports = MessagesDAO;
