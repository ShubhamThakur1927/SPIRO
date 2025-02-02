import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {

  const token = req.cookies.token;
  

  if (!token) {
    return res.status(403).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    if (!decoded.userId) {
      return res.status(401).json({ message: "Invalid token" });
    }
    // Refresh the token expiration time
    const newToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', newToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

export { verifyToken };
