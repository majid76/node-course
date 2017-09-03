var crypto = require('crypto-js');
var secretMessage = 'I hid the chips under the couch.';

var secretMessageObject = {
       name: 'Andrew',
       secretName: '007'
};
var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessageObject),secretKey);
console.log("Encrypted message: "+ encryptedMessage);

// decrypted message
var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessageObject = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log(decryptedMessageObject);

