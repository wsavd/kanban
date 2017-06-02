var express = require('express');
const router = express.Router();

//auth
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);

//boards
var boardController = require('../controllers/board.controller')
var columnController = require('../controllers/column.controller')
var cardController = require('../controllers/card.contoller')
var commentController = require('../controllers/comment.controller')

router.get('/boards', requireAuth, boardController.allBoards);
router.get('/board/:boardId', requireAuth, boardController.singleBoard);
router.post('/board', requireAuth, boardController.addBoard);
router.put('/board/:id', requireAuth, boardController.updateBoard);
router.delete('/board/:id', requireAuth, boardController.removeBoard);

//columns
//создать колонку в доске
router.post('/board/:boardId/column', requireAuth, columnController.addColumn);
//получить все колонки доски
router.get('/board/:boardId/columns', requireAuth, columnController.allColumns);
//cards
//создать карточку в доске
router.post('/board/:boardId/column/:columnId/card', requireAuth, cardController.addCard);
router.get('/board/:boardId/column/:columnId/cards', requireAuth, cardController.allCards);

//вывести все колонки и карточки доски такой-то
router.get('/board/:boardId/all', requireAuth, cardController.all);
//comments
router.post('/board/:boardId/column/:columnId/card/:cardId/comment', requireAuth, commentController.addComment);

module.exports = router;
