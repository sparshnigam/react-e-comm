const mongoose = require(`mongoose`);
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const dotenv = require('dotenv');

dotenv.config();

// Defining mongoose schema
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        // required:true,
        index: {
            unique: true, 
        },
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    phone: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    tokens:{
        authToken: {
            type: String,
            required: true
        },
        // expires: {
        //     type: Date,
        //     default: new Date(Date.now() + 60000),
        // },
    },

    cart: {
        type:Array, 
        default: []
    }
    
});

userSchema.pre(`save`, async function(next) {
    
    if(this.isModified(`password`)){
        
        this.password = await bcrypt.hash(this.password, 10);
    };
    next();    
});

userSchema.methods.authToken = async function () {
    try {
        const token = jwt.sign({_id: this._id.toString()}, process.env.AUTH_KEY);
        // const token = jwt.sign({_id: this._id}, `2vTpRGbV6ifATaplXi6WnjNt0OvvZxRXpSQLCRgn`);
        this.tokens = {authToken: token};
        await this.save();
        // console.log(this.tokens);

        return token;
    } catch (error) {
        console.log(`Token error`+error);
    }
}

userSchema.methods.myCart = async function (prop) {
    try{
        this.cart = this.cart.concat({...prop});;
        if(await this.save()){
            return true;
        }
    }catch(err){
        console.log('Cart error: '+err);
    }
}

const Registeration = mongoose.model(`Registeration`, userSchema);

module.exports = Registeration;