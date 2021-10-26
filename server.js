import {WebSocket, WebSocketServer} from "ws";

const PORT = 8081;
const wss = new WebSocketServer({ port: PORT });

// Main server function
wss.on("connection", (ws) => {
    console.log("[ CONNECTED ] ", ws._socket.remoteAddress);

    ws.on("message", (e) => {
        console.log("[ MESSAGE ] ", e);
        // TODO: 
        // 1. Parse message. 
        // 2. Broadcast message to all users!
        // 3. Save messages in file
    });

    ws.on("close", (_e) => {
        console.log("[ DISCONNECTED ]", ws._socket.remoteAddress);
    });
});
