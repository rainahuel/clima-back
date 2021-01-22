const app = require('express')();
const http = require('http').createServer(app);
const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });
const routes = require('./routes')

app.use('/', routes())



// base de datos mongo db
mongoose.connect('localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conectado a la base de datos')
});
// 

// socket 
io.on('connection', (socket) => {
console.log(0);
    socket.emit("hello","saludo");
});


http.listen(3000, () => {
    console.log('Escuchando puerto: 3000');
});

