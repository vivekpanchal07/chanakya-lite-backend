const Password = require('../models/password.model');

// Create a new password
exports.createPassword = async (req, res) => {
  try {
    const { name, website, username, password } = req.body;

    const newPassword = new Password({ name, website, username, password });
    await newPassword.save();

    res.status(201).json(newPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all passwords
exports.getAllPasswords = async (req, res) => {
  try {
    const passwords = await Password.find();
    res.status(200).json(passwords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single password by ID
exports.getPasswordById = async (req, res) => {
  try {
    const password = await Password.findById(req.params.id);
    if (!password) return res.status(404).json({ message: 'Password not found' });

    res.status(200).json(password);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a password by ID
exports.updatePasswordById = async (req, res) => {
  try {
    const { name, website, username, password } = req.body;

    const updatedPassword = await Password.findByIdAndUpdate(
      req.params.id,
      { name, website, username, password },
      { new: true, runValidators: true }
    );

    if (!updatedPassword) return res.status(404).json({ message: 'Password not found' });

    res.status(200).json(updatedPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a password by ID
exports.deletePasswordById = async (req, res) => {
  try {
    const deletedPassword = await Password.findByIdAndDelete(req.params.id);
    if (!deletedPassword) return res.status(404).json({ message: 'Password not found' });

    res.status(200).json({ message: 'Password deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
