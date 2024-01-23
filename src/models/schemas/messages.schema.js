const { Schema, model } = require("mongoose");

const collection = "messages";

const schema = new Schema({
  data: [
    {
      from: {
        name: {
          type: String,
        },
        avatar: {
          type: String,
        },
        email: {
          type: String,
        },
      },
      to: [
        {
          name: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
        },
      ],
      subject: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      read: {
        type: Boolean,
        required: true,
      },
      starred: {
        type: Boolean,
        required: true,
      },
      important: {
        type: Boolean,
        required: true,
      },
      hasAttachments: {
        type: Boolean,
        required: true,
      },
      labels: [],
    },
  ],
});

const MessagesModel = model(collection, schema);
module.exports = MessagesModel;
