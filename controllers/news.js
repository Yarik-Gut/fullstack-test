const News = require('../models/news');

module.exports.getAllNews = async function(req, res) {
  try {
    const news = await News.find().populate('category');
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports.createNews = async function(req, res) {
  const news = new News({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author,
    datePublished: req.body.datePublished
  });
  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports.updateNews = async function(req, res) {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: "Новину не знайдено." });

    if (req.body.title) news.title = req.body.title;
    if (req.body.content) news.content = req.body.content;
    if (req.body.category) news.category = req.body.category;
    if (req.body.author) news.author = req.body.author;
    if (req.body.datePublished) news.datePublished = req.body.datePublished;

    await news.save();
    res.json({ message: "Новину оновлено.", news });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports.deleteNews = async function(req, res) {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: "Новину не знайдено." });

    await news.remove();
    res.json({ message: "Новину видалено." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
