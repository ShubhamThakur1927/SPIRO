// import { Token } from "aws-sdk";
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authotoken = req.headers['authorization']; // Get token from header
    let token = authotoken // Extract token from "Bearer token" format
    let secret = process.env.JWT_SECRET; // Default secret
    if(!authotoken) {
        token = req.cookies.jwt; // Get token from cookies
        secret = process.env.JWT_REFRESH_SECRET;
    }
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    try {
        // Verify token using the secret
        const decoded = jwt.verify(token, secret); // Verify token using the secret
        // console.log(decoded);
        req.user = decoded.userId; // Attach user info to request
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token Hi" });
    }
};

export { verifyToken };
