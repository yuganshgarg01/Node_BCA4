const http = require('http'), qs = require('querystring');
http.createServer((req, res) => {
  if (req.method === 'GET') {
    //res.writeHead(200,{200, {'Conten-Type' : 'text/html');
    res.end(`<form method="POST"><input name="name" placeholder="Your Name" /><button>Submit</button></form>`);
  } else {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () =>  //res.writeHead(200,{200, {'Conten-Type' : 'text/html')
      res.end(`<h1>Hello, ${qs.parse(body).name || 'Guest'}!</h1>`));  }
}).listen(3000, () => console.log('Server running on http://localhost:3000'));
