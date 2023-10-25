import jwt from "jsonwebtoken";
const genAuthToken = (user) => {
  const token = jwt.sign({
    id: user._id,
    email: user.email,
    name: user.name,
  },process.env.JWT_SECRET);

  return token;
};

export default genAuthToken;
