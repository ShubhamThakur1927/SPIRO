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
	return refreshToken;
	
};

// const SessionId = (res, userId) =>{
// 	const sessionId = jwt.sign({ userId }, process.env.JWT_SESSION_SECRET, {
// 		expiresIn: '30d'
// 	});
// 	return sessionId;
// }




export { generateTokenAndSetCookie, refreshtoken};
