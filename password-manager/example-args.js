var argv = require('yargs')
				.command('Hello','Greets the user', function(yargs){
				yargs.options({

						name: {

							demand: true,
							alias: 'n',
							description: 'Youtr first name goed here',
							type: 'string'

						},
						lastname: {

							demand: true,
							alias: 'l',
							description: 'Your lastname goes here',
							type: 'string'

						}

					}).help('help');



		}).help('help')
		.argv;
var command = argv._[0];

console.log(argv);

if (command === 'Hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){

	console.log('Hello '+ argv.name + ' '+ argv.lastname + '!');

}else if (command === 'Hello' && typeof argv.name !== 'undefined' ){

	console.log('Hello '+ argv.name +'!');

}

else if(command === 'Hello'){

	console.log('Hello world!');

} 