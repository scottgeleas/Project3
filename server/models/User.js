const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    snippets: [
        {
            type: Schema.Types.ObjectId,
            ref: "Snippet"
        }
    ]
});

const User = model('User',
userSchema);

module.exports = User;

