
// Basic Web socket server
const WebSocket = require('ws');
const server = new WebSocket.Server({ port:8080 });

server.on('connection', ws => {
    console.log("New client connected");

    ws.on('message', data => {
        console.log(`Client has sent us ${data}`);
        ws.send(`${data}`);
    });

    ws.on('close', () => {
        console.log("Client has disconnected")
    });   
});
