	// console.log("Hello World");

	var storage = require('node-persist');
	var crypto = require('crypto-js');
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
				},
				masterPassword: {

					demand: true,
					alias: 'm',
					typeof: 'string',
					description: 'master passowrd'

				}
			}).help('help');
	}).command('get', 'get an account',function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'user name',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'master passowrd',
				type: 'string'

			}
		}).help('help')
	})
	.help('help')
	.argv;

	var command = argv._[0];


	function getAccounts(masterPassword){
		var encryptedAccounts = storage.getItemSync('accounts');
		var decryptedAccountsObjects = [];

		if(typeof encryptedAccounts !== 'undefined'){
			var bytes = crypto.AES.decrypt(encryptedAccounts.masterPassword);
			decryptedAccountsObjects = JSON.parse(bytes.toString(crypto.enc.Utf8));
		}
		return decryptedAccountsObjects;
	}

	function saveAccounts(accounts,masterPassword){
		var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts),masterPassword);
		storage.setItemSync('accounts',accounts.toString());
		return accounts;

	}

	function createAccount(account, masterPassword){
		var accounts = getAccounts(masterPassword);
		accounts.push(account);
		saveAccounts(accounts,masterPassword);
		return account;
	}
	function getAccount(accountName,masterPassword){
		// var accounts = storage.getItemSync('accounts');
		var accounts = getAccounts(masterPassword);
		var matchedAccount;
		accounts.forEach(function(account, masterPassword){
			if (account.name === accountName)
				matchedAccount = account;
		})
		return matchedAccount;
	}

	if(command === 'create'){

		var createdAccount = createAccount({
			name: argv.name,
			username: argv.usename,
			password: argv.password,

		},
		argv.masterPassword
		);
		console.log('Account created');
		console.log(createdAccount);
	} else if (command === 'get'){
		var fetchedAccount = getAccount(argv.name, argv.masterPassword);
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
