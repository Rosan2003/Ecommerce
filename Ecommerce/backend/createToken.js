const jwt = require('jsonwebtoken');

function genToken(_id) {
    const token = jwt.sign({ _id }, "SECRETKEY"); //here SECRETKEY  is our key to encrypt and decrypt
    return token;
}

module.exports = genToken;