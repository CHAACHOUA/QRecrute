const { verifyToken } = require('../utils/jwt');
const User = require('../models/User');
async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if(!authHeader) return res.status(401).json({error: 'No token'});
  const token = authHeader.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    const user = await User.findByPk(decoded.id);
    if(!user) return res.status(401).json({error: 'User not found'});
    req.user = user;
    next();
  } catch(err) {
    return res.status(401).json({error: 'Invalid token'});
  }
}
module.exports = authMiddleware;
