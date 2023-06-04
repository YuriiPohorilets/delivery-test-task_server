const { model, Schema } = require('mongoose');
const { hashSync, genSaltSync, compareSync } = require('bcrypt');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
    },

    name: {
      type: String,
      required: [true, 'Name is required'],
    },

    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },

    address: {
      type: String,
      required: [true, 'Address is required'],
    },

    token: {
      type: String,
      default: null,
    },
  },

  { versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = function (password) {
  this.password = hashSync(password, genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return compareSync(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;
