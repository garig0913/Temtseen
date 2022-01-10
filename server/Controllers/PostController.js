const Post = require("../Model/Post");

exports.postController = (req, res) => {
   const email = req.body.email;
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const projectTitle = req.body.projectTitle;
   const projectDesc = req.body.projectDesc;
   const budget = req.body.budget;
   const currency = req.body.currency;

   const pst = new Post({
      email: email,
      firstName: firstName,
      lastName: lastName,
      projectTitle: projectTitle,
      projectDesc: projectDesc,
      budget: budget,
      currency: currency,
   });
   pst.save()
      .then((result) => {
         console.log(result);
         res.json({ message: "succesful" });
      })
      .catch((err) => console.log(err));
};
