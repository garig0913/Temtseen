const Post = require("../Model/Post");

exports.postController = (req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const projectTitle = req.body.projectTitle;
  const projectDesc = req.body.projectDesc;
  const budget = req.body.budget;
  const currency = req.body.currency;
  const imgUrl = req.body.imgUrl;
  const category = req.body.category;

  const pst = new Post({
    email: email,
    firstName: firstName,
    lastName: lastName,
    projectTitle: projectTitle,
    projectDesc: projectDesc,
    budget: budget,
    currency: currency,
    imgUrl: imgUrl,
    category: category,
  });
  pst
    .save()
    .then((result) => {
      res.json({ message: "succesful" });
    })
    .catch((err) => console.log(err));
};

exports.getAllPosts = (req, res) => {
  const category = req.query.category;
  Post.find({ category: category })
    .then((posts) => {
      res.json([posts]);
    })
    .catch((err) => console.log(err));
};
