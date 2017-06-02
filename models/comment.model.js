var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const commentSchema = new Schema({
        text: {
            type: String
        },
        cardId: {type: Schema.ObjectId, ref: 'Card'},
        created_at: { type: Date, default: Date.now },
        _creator: {type: Schema.ObjectId, ref: 'User'}
}, { versionKey: false });

module.exports = mongoose.model('Comment', commentSchema);