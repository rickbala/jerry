const request = require('request')
const fome = 5 //min
const ratoeira = 'http://www.google.com.br'
const adminEmail = 'teste@gmail.com'
setInterval(() => request(ratoeira, (err,res) => {
	if (!err) 
		console.log('Eu sou o Jerry. O site ' + ratoeira + ' está fora! Enviarei um um email para ' + adminEmail + ' avisando.')
}), fome * 3600)