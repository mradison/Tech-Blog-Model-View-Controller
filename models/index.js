const User = require('./User');
const Blog = require('./Blog');
const Post = require('./Post');

Blog.hasMany(Post, {
  foreignKey: 'blog_id',
});

Post.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

module.exports = { User, Blog, Post };
