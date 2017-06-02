var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const cardSchema = new Schema({
        title: { type: String },
        text: { type: String },
        _creator: {type: Schema.ObjectId, ref: 'User'},
        _columnId: {type: Schema.ObjectId, ref: 'Column'},
        _comments: [{type: Schema.ObjectId, ref: 'Comment'}]
}, { versionKey: false });

module.exports = mongoose.model('Card', cardSchema);