import {WebSocket, WebSocketServer} from "ws";
import broadcastMessage from "./utils/broadcast.js";
import saveMessage from "./utils/logging.js";
import parseMessage from "./utils/parsing.js"; 

const PORT = 8081;
const LOG_FILE = "./logs/log01.txt";
const wss = new WebSocketServer({ port: PORT });

// Main server function
wss.on("connection", (ws) => {
    console.log("[ CONNECTED ] ", ws._socket.remoteAddress);

    // Parse message, save it to file and broadcast it to 
    // everyone except the sender.
    ws.on("message", (msg) => {
        console.log("[ MESSAGE ] ", JSON.parse(msg));
        const message = JSON.parse(msg);
        saveMessage(LOG_FILE, message);
        broadcastMessage(message, wss, ws);
    });

    ws.on("close", (_e) => {
        console.log("[ DISCONNECTED ]", ws._socket.remoteAddress);
    });
});
