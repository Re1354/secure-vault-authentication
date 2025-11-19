const passport = require('passport');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

const authenticateJWT = (req, res, next) => {
  // Check if user is in session
  if (req.session && req.session.token) {
    try {
      const decoded = jwt.verify(req.session.token, JWT_SECRET);
      req.user = req.session.user;
      return next();
    } catch (error) {
      return res.redirect('/login');
    }
  }

  // Fallback to JWT from header for API requests
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.redirect('/login');
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = { authenticateJWT };
