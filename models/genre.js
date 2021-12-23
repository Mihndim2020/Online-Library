var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: string, required: true, maxLength: 100},
    category_of_book: {type: String, required: true, enum: ['Science', 'Fiction', 'Non-Fiction', 'Military History','Romance'], default: 'Programming'},
  }
);

GenreSchema.virtual('url').get(function () {
  return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('genre', GenreSchema);