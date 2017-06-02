var Board = require('../models/board.model');

exports.allBoards = function(req, res) {
  Board.find()
    .then(results => res.json(results)) 
    .catch(e => next(e));
}
exports.singleBoard = function(req, res) {
    Board.findOne({_id: req.params.boardId})
      .then(results => res.json(results))
      .catch(e => next(e));
}
exports.addBoard = function(req, res) {
  const board = new Board({
    title: req.body.title
  });
  board.save()
    .then(addedBoard => res.json(addedBoard))
    .catch(e => next(e));
}
exports.updateBoard= function(req, res) {
	let body = req.body;
    Board.update({_id: req.params.id}, {$set:body})
      .then(results => res.json(results))
      .catch(e => next(e));
};
exports.removeBoard = function(req, res) {
    let query = {_id: [req.params.id]};
	Board.remove(query)
      .then(deleted => res.json(deleted))
      .catch(e => next(e));
};