const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const { parser, htmlOutput, toHTML } = require('discord-markdown');

//console.log(toHTML('This **is** a __test__'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
});

const domainLink = "https://devmegle.herokuapp.com/"

app.get('/chat', (req, res) => {
  res.render('chat', {user: req.query.username || "Użytkowniku", avatar: req.query.avatarURL || "https://i.imgur.com/GFtRn4Y.png", linkDomain: domainLink})
})

app.get('/chat/pokoj-1', (req, res) => {
  res.render('pokoj1', {user: req.query.username || "Użytkownik", avatar: req.query.avatarURL || "https://i.imgur.com/GFtRn4Y.png", linkDomain: domainLink, dsadandawner34281dabsjajshda: req.query.dsadandawner34281dabsjajshda || "User"})
})
app.get('/chat/pokoj-2', (req, res) => {
  res.render('pokoj2', {user: req.query.username || "Użytkownik", avatar: req.query.avatarURL || "https://i.imgur.com/GFtRn4Y.png", linkDomain: domainLink, dsadandawner34281dabsjajshda: req.query.dsadandawner34281dabsjajshda || "User"})
})
app.get('/chat/pokoj-3', (req, res) => {
  res.render('pokoj3', {user: req.query.username || "Użytkownik", avatar: req.query.avatarURL || "https://i.imgur.com/GFtRn4Y.png", linkDomain: domainLink, dsadandawner34281dabsjajshda: req.query.dsadandawner34281dabsjajshda || "User"})
})
app.get('/chat/pokoj-4', (req, res) => {
  res.render('pokoj4', {user: req.query.username || "Użytkownik", avatar: req.query.avatarURL || "https://i.imgur.com/GFtRn4Y.png", linkDomain: domainLink, dsadandawner34281dabsjajshda: req.query.dsadandawner34281dabsjajshda || "User"})
})
app.get('*', function(req, res){
  res.status(404).render('error')
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg.replace('**', '<strong>').replace('***', '</strong>').replace('^^(', '<i>').replace(')^^', '</i>').replace('`codes`', '<div class="code">').replace('`codee`', '</div>'));
  });
  socket.on('chat messagee', msg => {
    io.emit('chat messagee', msg.replace('**', '<strong>').replace('***', '</strong>').replace('^^(', '<i>').replace(')^^', '</i>').replace('`codes`', '<div class="code">').replace('`codee`', '</div>'));
  });
  socket.on('chat messageee', msg => {
    io.emit('chat messageee', msg.replace('**', '<strong>').replace('***', '</strong>').replace('^^(', '<i>').replace(')^^', '</i>').replace('`codes`', '<div class="code">').replace('`codee`', '</div>'));
  });
  socket.on('chat messageeee', msg => {
    io.emit('chat messageeee', msg.replace('**', '<strong>').replace('***', '</strong>').replace('^^(', '<i>').replace(')^^', '</i>').replace('`codes`', '<div class="code">').replace('`codee`', '</div>'));
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
