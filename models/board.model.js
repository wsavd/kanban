var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const boardSchema = new Schema({
        title: {
            type: String
        },
        _columns: [{type: Schema.ObjectId, ref: 'Column'}]
}, { versionKey: false });

module.exports = mongoose.model('Board', boardSchema);