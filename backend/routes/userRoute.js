const router = require('express').Router();
const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;