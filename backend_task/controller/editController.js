const User = require("../models/userDB");
module.exports = {
  post: (req, res) => {
    session = req.session;
    if (session.userId) {
      User.findByIdAndUpdate(
        session.userId,
        {
          $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            designation: req.body.designation,
            date_of_joining: req.body.date_of_joining,
            birthDate: req.body.birthDate,
            profilePicture: req.body.profilePicture,
            role: req.body.role,
          },
        },
        (err, user) => {
          if (err) throw err;
          res.send("User Info Updated");
        }
      );
    } else {
      res.send("Session is required");
    }
  },
};
