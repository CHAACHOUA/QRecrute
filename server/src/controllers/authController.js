const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');

module.exports = {
  register: async (req, res) => {
    const { email, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash: hash, role });
    return res.json({user});
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }});
    if(!user) return res.status(404).json({error:'User not found'});
    const match = await bcrypt.compare(password, user.passwordHash);
    if(!match) return res.status(401).json({error:'Wrong password'});
    const token = generateToken({id:user.id, role:user.role});
    return res.json({token, role:user.role});
  }
};
