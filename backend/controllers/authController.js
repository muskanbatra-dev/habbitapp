const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
//register endpoint
const test = (req, res) => {
  res.json("test is working");
};
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    //check if password is good
    if (!password || password.length < 6) {
      res.json({
        error: "password is required and should be atleast 6 charachters long",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already ",
      });
    }
    let salt = bcrypt.genSaltSync(saltRounds);
    let hashPassword = bcrypt.hashSync(password, salt);
    console.log(hashPassword, "hashed");
    //create user
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};
// login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No User Found",
      });
    }

    //check if passwords match
    console.log(password, user.password);
    const match = bcrypt.compareSync(password, user.password);

    if (match) {
      res.json("passwords match");
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          console.log(token, "token");
          res
            .cookie("token", token, {
              expires: new Date(Date.now() + 3600000 * 24 * 60 * 60 * 1000),
              httpOnly: true,
              path: "/",
              sameSite: "None", // Only use with HTTPS
              secure: true, // Only use with HTTPS
            })
            .json(user);
        }
      );
    }

    if (!match) {
      res.json({
        error: "Passwords do not match",
      });
    }
  } catch (error) {
    console.log(error.reason);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
