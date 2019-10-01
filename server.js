import express from 'express'
import bodyParser from 'body-parser'
import CONFIG from './app.config'
import https from 'https'
import http from 'http'


const app = express();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
process.setMaxListeners(0);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Options to specify any cert or key
var options = {
    
};

app.get('/ping', (req,res) => res.send('pong'));
app.use(express.static(__dirname +'/webapp'));
app.all("/*", function(req, res, next) {
    res.sendFile("index.html", { root: __dirname + "/webapp" });
});
//https.createServer(options, app).listen(CONFIG.server.port, CONFIG.server.ip, () => console.log('open link https://localhost:'+CONFIG.server.port));
http.createServer(app).listen(CONFIG.server.port, CONFIG.server.ip, () => console.log('open link https://localhost:'+CONFIG.server.port));
