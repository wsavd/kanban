var Card = require('../models/card.model');
var Comment = require('../models/comment.model');

exports.addComment = function(req, res) {
  const comment = new Comment({
    text: req.body.text,
    _cardId: req.params.cardId,
    _creator: req.user._id
  });
  comment.save().then(addedComment =>
       Card.update({_id: req.params.cardId},{ $push: {'_comments': addedComment._id} }).then(data => res.json(data))
    .catch(e => next(e)));
}