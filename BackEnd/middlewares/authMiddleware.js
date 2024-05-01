const jwt = require('jsonwebtoken');
const User = require('../models/usres');

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized1' });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken; 
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized3' });
  }
};
