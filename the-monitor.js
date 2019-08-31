const request = require('request')
const ratoeira = process.argv[2] || 'http://www.google.com.br'
const adminEmail = process.argv[3] || 'teste@gmail.com'
const fome = process.argv[4] || 5 //min
console.log("Jerry is awakening...")
setInterval(
	() => request(ratoeira, (err,res) => {
		if (err) 
			console.log(err)
		else
			console.log('Eu sou o Jerry! Entendi que o site ' 
			+ ratoeira + ' pode estar fora! Enviarei um um email para ' 
			+ adminEmail + ' avisando em caso de alhum problema.')
	})
	, 2000
)
