const router = require('express').Router();
const { Game } = require('../../models');

// Get all Games
router.get('/', async (req, res) => {
    try {
        const postedData = await Game.findAll({
        })
            const posts = postedData.map((post) => post.get({ plain: true }));
            res.status(200).json({ posts });

    } catch (err) {
        res.status(500).json(err);
    }
});

// Creates a new Game
router.post('/', async (req, res) => {
    try {
        const post = await Game.create({
            title: req.body.name,
            genre: req.body.genre,
            user_id: req.session.gamer_id,
            rating: req.body.rating,
            summary: req.body.summary,
            tips_tricks: req.body.tips_tricks
          });
        res.status(200).json({post, message : `New Game Created!`})
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;