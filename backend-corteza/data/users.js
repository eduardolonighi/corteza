import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234567", 10),
    isAdmin: true,
  },

  {
    name: "eduardo l",
    email: "eduardo@example.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "andrea f",
    email: "andrea@example.com",
    password: bcrypt.hashSync("1234567", 10),
  },
];

export default users;
