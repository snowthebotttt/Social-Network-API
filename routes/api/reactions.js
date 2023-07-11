const express = require('express');
const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

const router = express.Router();

router.route('/thoughts/:thoughtId/reactions')
  .post(createReaction);

router.route('/thoughts/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
