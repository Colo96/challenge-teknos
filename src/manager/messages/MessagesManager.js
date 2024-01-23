const fs = require("fs/promises");
const { existsSync } = require("fs");

class MessagesManager {
  constructor(path) {
    this.path = path;
  }

  async getMessages() {
    if (existsSync(this.path)) {
      const data = await fs.readFile(this.path, "utf-8");
      const messages = JSON.parse(data);
      return messages;
    } else {
      return [];
    }
  }

  async addMessage(message) {
    let messages = await this.getMessages();
    const newMessage = {
      ...message,
    };
    messages.data.push(newMessage);
    await fs.writeFile(this.path, JSON.stringify(messages, null, "\t"));
    return newMessage;
  }
}

module.exports = MessagesManager;
