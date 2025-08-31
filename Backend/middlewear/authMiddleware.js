import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
const authHeader = req.headers.authorization;
console.log(authHeader);
if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

const token = authHeader.split(" ")[1]; 
if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, "shshsh", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded; 
    next();
  });
};