const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const test = (req, res) => {
  res.json("test is working");
};
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
   
    if (!password || password.length < 6) {
      res.json({
        error: "password is required and should be atleast 6 charachters long",
      });
    }
    
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already ",
      });
    }
    let salt = bcrypt.genSaltSync(saltRounds);
    let hashPassword = bcrypt.hashSync(password, salt);
    console.log(hashPassword, "hashed");
    
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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No User Found",
      });
    }

 
    const match = bcrypt.compareSync(password, user.password);

    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          tokenobj = { token: token };
          data = { ...tokenobj, ...user };
          return res.json(data);
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
