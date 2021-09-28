const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let loginSchema = new Schema({
    usuario: {
        type: String,
    },
    contrasena: {
        type: String,
    },

}, {
    collection: "login",
});

module.exports = mongoose.model("login", loginSchema);