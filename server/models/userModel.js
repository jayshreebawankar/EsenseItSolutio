const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    first_name: {   
        type: String,
        require: [true, 'first name is required'],
        // unique: true
    },
    last_name: {   
        type: String,
        require: [true, 'last name is required'],
        // unique: true
    },
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: true,
        trim: true,
        match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'invalid email'],
    },
    phone_no: {
        type: Number,
        require: [true, 'phone_no is required'],
        default: '+91',
    },
    address: {   
        type: String,
        require: [true, 'address is required'],
        // unique: true
    },
    emp_type: {
        type: String,
        require: [true, 'employment type is required'],
        // maxLength: [100, 'bio must contain 100 characters'],
        // default: 'bio',
    },
    designation: {
        type: String,
        require: [true, 'designation is required'],
        // minLength: [8, 'password must contains 8 characters'],
        // maxLength: [8, 'password must contains 8 characters'],
    },
    image: {
        type: String,
        // require: [true, 'photo is required'],
        default: '',
    },
}, {
    timestamps: true,
}
);

//Encrypt password before saving to db
userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    //hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
})

const User = mongoose.model('User', userSchema);
module.exports = User;