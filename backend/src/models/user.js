import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    createdAt: { type: Date, default: Date.now }
});

User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, 8);
};

User.methods.validateHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('User', User);
