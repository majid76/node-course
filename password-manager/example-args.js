var argv = require('yargs').argv;
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