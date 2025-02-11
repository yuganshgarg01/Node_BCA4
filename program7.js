const http = require('http'),
      qs = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Serve a simple HTML form
    res.end(`
      <form method="POST">
        <input name="name" placeholder="Name" required/><br>
        <input name="age" type="number" placeholder="Age" required/><br>
        <input name="id" placeholder="ID" required/><br>
        <input name="phone" type="number" placeholder="Phone Number" required/><br>
        <button>Submit</button>
      </form>
    `);
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const data = qs.parse(body);
      const name = data.name,
            age = parseInt(data.age, 10),
            id = data.id,
            phone = parseInt(data.phone, 10);
      
      res.end(`
        <h1>Input Received</h1>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>ID: ${id}</p>
        <p>Phone: ${phone}</p>
      `);
    });
  }
}).listen(3000, () => console.log('Server running on http://localhost:3000'));
