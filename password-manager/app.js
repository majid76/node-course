	// console.log("Hello World");

	var storage = require('node-persist');
	// var yargs = require("yargs");
	storage.initSync();
	var argv = require('yargs')
	.command('create','create a new account', function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goed here',
				type: 'string'			},
				usename: {
					demand: true,
					alias: 'u',
					description: 'Your lastname goes here',
					type: 'string'
				},
				password: {
					demand: true,
					alias: 'p',
					description: 'this is the password',
					type: 'string'
				}
			}).help('help');
	}).command('get', 'get an account',function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'user name',
				type: 'string'
			}
		}).help('help')
	})
	.help('help')
	.argv;

	var command = argv._[0];

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

	if(command === 'create'){

		var createdAccount = createAccount({
			name: argv.name,
			username: argv.usename,
			password: argv.password
	});
		console.log('Account created');
		console.log(createdAccount);
	} else if (command === 'get'){
			var fetchedAccount = getAccount(argv.name);
			if (typeof fetchedAccount === 'undefined'){
				console.log('Account not found');
			}
			else{
				console.log('Account found');
				console.log(fetchedAccount);
			}
			
	} else{

		console.log('the command '+ command+ ' is not found');
	}
