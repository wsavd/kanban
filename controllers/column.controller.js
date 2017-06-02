var Column = require('../models/column.model');
var Board = require('../models/board.model');
//добавить колонку и добавить ссылку на нее в доске
exports.addColumn = function(req, res) {
  const column = new Column({
    title: req.body.title,
    _boardId: req.params.boardId
  });
  column.save().then(addedColumn =>
       Board.update({_id: req.params.boardId},{ $push: {'_columns': addedColumn._id} }).then(data => res.json(data))
    .catch(e => next(e)));
}
//все колонки доски 
exports.allColumns = function(req, res) {
  Board.find({ _id: req.params.boardId }).populate({path: '_columns', select: '-_boardId -_cards'}).then(result => res.json(result))
}