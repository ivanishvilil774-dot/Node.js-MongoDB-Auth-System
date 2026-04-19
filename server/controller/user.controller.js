const User = require('../models/User');
const bcrypt = require('bcrypt');

// sing up
const createUser = async (req, res) => {
    const { name, email, age, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        // 🔐 hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            age,
            password: hashedPassword
        });

        await newUser.save();

        res.json({
            message: 'User created successfully',
            user: newUser
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'Server error' });
    }
};


// login

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // 🔐 compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        res.json({
            message: 'Login successful',
            user
        });

    } catch (e) {
        return res.status(500).json({ error: 'Server error' });
    }
};

// get all users Names and Emails

const getAllUser = async (req, res) => {
    try{
        const user = await User.find({}, 'name email');
        res.json(user)
    }catch(e){
        return res.status(500).json({ error: 'Server error' });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;  
    try {
        const user = await User.findById(id, 'name email');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (e) {
        return res.status(500).json({ error: 'Server error' });
    }
}


module.exports = {
    createUser,
    loginUser,
    getUserById,
    getAllUser,
}