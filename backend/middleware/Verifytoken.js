import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authotoken = req.headers['authorization']; // Get token from header
    console.log(authotoken);
    
    // if (!authotoken) {
    //     token = req.session?.token; // Get token from sessionStorage
    // }
    if (!authotoken) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const token = authotoken.split(' ')[1];
        console.log("Token",token);
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId; // Attach user info to request
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token Hi" });
    }
};

export { verifyToken };
