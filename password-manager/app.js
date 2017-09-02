// console.log("Hello World");

var storage = require('node-persist');
// var yargs = require("yargs");
storage.initSync();
function createAccount(account){
		var accounts = storage.getItemSync('accounts');
		if(typeof accounts === 'undefined'){
			accounts = [];
		}		
		accounts.push(account);
		storage.setItemSync('accounts', accounts);
		return accounts;
}
function getAccount(accountName){
            var accounts = storage.getItemSync('accounts');
            var matchedAccount;
            accounts.forEach(function(account){
            		if (account.name === accountName)
            			matchedAccount = account;
            }) 

            return matchedAccount;

}

// createAccount({

// 	name: 'Facebook',
// 	username: 'User123',
// 	password: 'Password123'

// });
// createAccount(twitterAccount);
var facebookAccount = getAccount('Facebook');
 console.log(facebookAccount);

