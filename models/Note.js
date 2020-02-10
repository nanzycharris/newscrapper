var mongoose = require("mongoose");

// Same Schema from article.js
var Schema = mongoose.Schema;

// Using schema constructor, make a new NoteSchema object
var NoteSchema = new Schema({
  title: String,

  body: String
});

// Note creates our model from our NoteSchema, using Mongoose model method
var Note = mongoose.model("Note", NoteSchema);

// Export model
module.exports = Note;
