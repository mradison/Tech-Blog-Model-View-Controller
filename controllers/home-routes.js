const router = require('express').Router();
const { Post, Blog } = require('../models');
// const { checkAuth } = require('../utils/helpers')
// GET all blogs for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: Post,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const blogs = dbBlogData.map((blog) =>
      blog.get({ plain: true })
    );
    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
// router.get('/blog/:id', checkAuth(),async (req, res) => {
//   try {
//     const dbBlogData = await Blog.findByPk(req.params.id, {
//       include: [
//         {
//           model: Post,
//           attributes: [
//             'id',
//             'title',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

    router.get('/blog/:id',async (req, res) => {
      try {
        const dbBlogData = await Blog.findByPk(req.params.id, {
          include: [
            {
              model: Post,
              attributes: [
                'id',
                'title',
                'filename',
                'description',
              ],
            },
          ],
        });

    const blog = dbBlogData.get({ plain: true });
    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
// router.get('/post/:id', checkAuth(), async (req, res) => {
//   try {
//     const dbPostData = await Post.findByPk(req.params.id);

//     const post = dbPostData.get({ plain: true });
//     res.render('post', { post, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    const post = dbPostData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
