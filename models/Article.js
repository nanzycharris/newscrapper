var mongoose = require("mongoose");

// Create your schema
var Schema = mongoose.Schema;

// Create a new schema object, this is similar to a sequelized model
// Include -title- and -link-, both are required
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Article creates our model from our schema using Mongoose model method
var Article = mongoose.model("Article", ArticleSchema);

// Export model
module.exports = Article;
