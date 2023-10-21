const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

UserSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(next) {
    if (this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 10);
    } 
    next();
});

module.exports = mongoose.model('User', UserSchema);