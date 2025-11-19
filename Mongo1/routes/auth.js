const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

// Register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  console.log('Registration attempt:', { email });

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: 'Password must be at least 6 characters long' });
  }
  try {
    const existing = await userModel.findOne({ email });
    if (existing) {
      console.log('Email already exists:', email);
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = new userModel({ email: email, password: hash });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      JWT_SECRET,
      {
        expiresIn: '24h',
      }
    );

    req.session.token = token;
    req.session.user = { _id: newUser._id, email: newUser.email };

    console.log('Registration successful:', email);

    res.status(200).json({
      message: 'Registration successful',
      token: token,
      user: { id: newUser._id, email: newUser.email },
    });
  } catch (error) {
    console.error('Register error:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Login attempt:', { email });

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      console.log('User not found:', email);
      return res.status(401).json({ message: 'Invalid Credentials' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
        expiresIn: '24h',
      });

      req.session.token = token;
      req.session.user = { _id: user._id, email: user.email };

      console.log('Login successful:', email);

      return res.status(200).json({
        message: 'Login successful',
        token: token,
        user: { id: user._id, email: user.email },
      });
    }

    console.log('Password mismatch for:', email);
    return res.status(401).json({ message: 'Invalid Credentials' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get Profile (protected route)
router.get('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await userModel.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      id: user._id,
      email: user.email,
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;
