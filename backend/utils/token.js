import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (res, userId,) => {
const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: '30s'
	});
// ✅ Return token in response

return token;
};

const refreshtoken = (res, userId,) =>{
	const refreshToken = jwt.sign({ userId },process.env.JWT_REFRESH_SECRET,{
		expiresIn: '1d'
	});
};

export { generateTokenAndSetCookie, refreshtoken };
