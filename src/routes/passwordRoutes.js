const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

// Create a new password
router.post('/', passwordController.createPassword);

// Get all passwords
router.get('/', passwordController.getAllPasswords);

// Get a single password by ID
router.get('/:id', passwordController.getPasswordById);

// Update a password by ID
router.put('/:id', passwordController.updatePasswordById);

// Delete a password by ID
router.delete('/:id', passwordController.deletePasswordById);

module.exports = router;
