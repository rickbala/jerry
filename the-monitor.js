const request = require('request')
const ratoeira = process.argv[2] || 'http://www.google.com.br'
const adminEmail = process.argv[3] || 'teste@gmail.com'
const fome = process.argv[4] || 5 //min
setInterval(() => request(ratoeira, (err,res) => {
	if (!err) console.log('Eu sou o Jerry. O site ' + ratoeira + ' está fora! Enviarei um um email para ' + adminEmail + ' avisando.')
}), fome * 3600 * 1000)