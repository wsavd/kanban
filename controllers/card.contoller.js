var Card = require('../models/card.model');
var Column = require('../models/column.model');
var Board = require('../models/board.model');
var User = require('../models/user')

exports.addCard = function(req, res) {
  const card = new Card({
    title: req.body.title,
    text: req.body.text,
    _creator: req.user.id,
    _columnId: req.params.columnId
  });
  card.save().then(addedCard =>
       Column.update({_id: req.params.columnId},{ $push: {'_cards': addedCard._id} }).then(data => res.json(data))
    .catch(e => next(e)));
}
//все колонки доски 
exports.allCards = function(req, res) {
  Column.find({ _id: req.params.columnId }).populate({path: '_cards'}).then(result => res.json(result))
}
exports.all = function(req, res) {
  Board.find({ _id: req.params.boardId }).populate({
    path: '_columns',
     populate: {
       path: '_cards',
        populate: { path: '_comments',
         populate: {
            path: '_creator',
            select: '-email -password'
         }
        }
     }
  }).then(result => res.json(result))
}