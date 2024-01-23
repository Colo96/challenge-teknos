const { Schema, model } = require("mongoose");

const collection = "folders";

const schema = new Schema({
  data: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
  ],
});

const FoldersModel = model(collection, schema);
module.exports = FoldersModel;
