const getSERVICES = require("../services/index.service");

const { messagesService } = getSERVICES();

class MessagesController {
  static async addMessages(req, res, next) {
    try {
      const messages = await messagesService.addMessages();
      const response = {
        success: true,
        messages,
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  static async getMessages(req, res, next) {
    try {
      const messages = await messagesService.getMessages();
      const response = {
        success: true,
        messages,
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  static async getMessagesByParams(req, res, next) {
    let from = req.query.from;
    let to = req.query.to;
    let subject = req.query.subject;

    try {
      const messages = await messagesService.getMessages();
      let message;
      for (let index = 0; index < messages[0].data.length; index++) {
        if (
          (messages[0].data[index].from.name == from ||
            messages[0].data[index].from.name.includes(from)) &&
          (messages[0].data[index].to[0].name == to ||
            messages[0].data[index].to[0].name.includes(to)) &&
          (messages[0].data[index].subject == subject ||
            messages[0].data[index].subject.includes(subject))
        ) {
          message = messages[0].data[index];
        }
      }

      const response = {
        success: true,
        message,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  static async getMessagesById(req, res, next) {
    const { id } = req.params;
    try {
      const messages = await messagesService.getMessagesById(id);
      const response = {
        success: true,
        messages,
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  static async createMessage(req, res, next) {
    const payload = req.body;
    try {
      const newMessage = await messagesService.createMessage(payload);
      const response = {
        success: true,
        newMessage,
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  static async deleteMessage(req, res, next) {
    const messageId = req.params.id;
    try {
      const deletedMessage = await messagesService.deleteMessageById(messageId);
      const response = {
        success: true,
        deletedMessage,
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MessagesController;
