const port = 3001;

const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require(`cookie-parser`);
const { body, validationResult } = require('express-validator');
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const dotenv = require('dotenv');
dotenv.config();

require(`./config/database`);
const Register = require(`./models/registration`);
// const Cart = require(`./models/cart`);

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(express.urlencoded({ extended: false }));

app.get(`/`, async (req, res) => {
    res.status(200).send('<h1>React E-Commerce</h1>');
});

app.post('/register',
    body('name').isLength({ max: 30, min: 3 }).withMessage("Name must contain 3 characters."),
    body('email').isEmail().custom(async value => {
        const data = await Register.findOne({ email: value })
        if (data) {
            return Promise.reject('E-mail already in use.');
        }
    }),
    body('phone').isMobilePhone().custom(async value => {
        const data = await Register.findOne({ phone: value });
        if (data) {
            return Promise.reject('Invalid phone number.');
        }
    }),
    body('password')
    // .custom(password => {
    //     if(password && password.match(/^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)) {
    //       return true;
    //     }
    //   }).withMessage("Password must contain 6 characters and atleast 1 number, 1 uppercase and lowercase letter.")
    , async (req, res, error) => {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            } else {

                const userReg = new Register({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: req.body.password
                });

                const token = await userReg.authToken();

                // res.cookie("jwt", token, {
                //     expires: new Date(Date.now() + 60000),
                //     httpOnly: true
                // });

                userReg.save().then(() => {
                    res.json(
                        {
                            // token: token,
                            message: 'Successfully registered',
                        });
                }).catch((error) => {
                    console.log(error);
                    // let err = error.code == 11000? 'Duplicate:' : '';
                    res.json(error);
                });
            }
        } catch {
            res.status(400).send(`Invalid input` + error);
            console.log(error);
        }
    });

app.post('/login',
    body('phone').isMobilePhone().custom(async value => {
        const data = await Register.findOne({ phone: value });
        if (data.phone != value) {
            return Promise.reject('Invalid login credentials.');
        }
    }).withMessage('Invalid login credentials'),
    body('password')
    , async (req, res, error) => {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            } else {
                const password = req.body.password;
                const user = await Register.findOne({ phone: req.body.phone });
                // console.log(user.tokens[0]._id.toString());

                const token = await user.authToken();
                res.cookie("ecomm", token, {
                    httpOnly: true
                });

                // LOGIC FOR CREATING COOKIE IF REMEMBER IS CHECKED
                // if(req.body.remember == 'true'){
                //     const token = await user.authToken();
                //     res.cookie("e-comm", token, {
                //         expires: new Date(Date.now() + 60000),
                //         httpOnly: true
                //     });
                // }

                const passMatch = await bcrypt.compare(password, user.password);
                if (passMatch) {

                    res.status(200).json({ message: 'Success' });
                } else {
                    res.status(400).json({ errors: ['Invalid login credentials'] });
                }
            }

        } catch {
            res.status(400).send(`Invalid input: ` + error);
            console.log('Error: ' + error);
        }
    });

app.put('/cart', async (req, res) => {

    // Register.updateOne({ 'tokens.authToken': token }, { cart: [{ ...req.body }] }, function (err, update) {
    //     if (err) return handleError(err);
    //     console.log('Successfully Updated');
    //     res.json({
    //         message: "Successfully added to cart",
    //     })
    // });
    let token = req.cookies.ecomm;
    let user = await Register.findOne({ 'tokens.authToken': token });


    if (user) {
        const id = req.body.pId;
        let product = await Register.findOne({ cart: { $elemMatch: { pId: id } } });
        if(!product){
            // console.log(product);
            let cart = await user.myCart(req.body);
            if(cart){
                res.json({
                    message: "Successfully added to cart",
                });
            }
        }
    }

});

app.listen(port, () => {
    console.log(`Server running at port: ${port}/`);
});