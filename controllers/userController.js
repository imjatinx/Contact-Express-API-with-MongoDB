const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

/*
@desc Register a user
@route GET /api/user/register
@access public
*/
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are required!")
    }

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
        res.status(400)
        throw new Error("Email Already Registered!")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400);
        throw new Error('User data is not valid!')
    }

    res.json({ message: 'User registered successfully' });
});

/*
@desc Login user
@route GET /api/user/login
@access public
*/
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('All field are Required')
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'1m'},
        )
        res.status(200).json({ accessToken })
    }else{
        res.status(401)
        throw new Error('Email or Password is not valid!')
    }

    res.json({ message: 'Login Successfully' });
});

/*
@desc Current user info
@route GET /api/user/curent
@access private
*/
const currentUser = asyncHandler(async (req, res) => {
    
    res.json({ message: 'Current user info' });
});

/*
@desc Logout user
@route GET /api/user/logout
@access public
*/
const logoutUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Logout Successfully' });
});



module.exports = { registerUser, loginUser, currentUser, logoutUser }