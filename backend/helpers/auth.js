const bcrypt = require("bcrypt");

const hashPassword = await bcrypt.hash(password, 10);

const comparePassword = (password, hashPassword) => {
  console.log(password, hashPassword);
  return bcrypt.compare(password, hashPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
