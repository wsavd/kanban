var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const columnSchema = new Schema({
        title: {
            type: String
        },
        _boardId: {type: Schema.ObjectId, ref: 'Board'},
        _cards: [{type: Schema.ObjectId, ref: 'Card'}]
}, { versionKey: false });

module.exports = mongoose.model('Column', columnSchema);