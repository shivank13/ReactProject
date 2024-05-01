const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws) {
    console.log('Client connected');
    
    ws.on('message', function incoming(message) {
        console.log('Received message:', message);

        // Broadcast message to all clients (for demonstration purposes)
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', function close() {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server started on ws://localhost:3001');
