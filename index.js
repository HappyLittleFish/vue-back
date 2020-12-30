const http = require('http')

const users = [
	{id: 11, name: 'young1'},
	{id: 22, name: 'young2'},
	{id: 33, name: 'young3'},
]

let server = http.createServer(function(req,res) {
	res.setHeader('Access-Control-Allow-Origin', '*')
	if (req.url === '/api/users') {
		res.end(JSON.stringify(users))
	} else {
		res.end('Not Found')
	}
})

server.listen(3000,() => {
	console.log('后端API已经启动')
})