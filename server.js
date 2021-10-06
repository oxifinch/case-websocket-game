import ws from "ws";

const PORT = 8081;
const wss = new ws.WebSocketServer({ port: PORT });

// Main server function
wss.on("connection", (ws) => {
    console.log("[ CONNECTED ] ", ws._socket.remoteAddress);

    ws.on("message", (e) => {
        console.log("[ MESSAGE ] ", e);
    });

    ws.on("close", (_e) => {
        console.log("[ DISCONNECTED ]", ws._socket.remoteAddress);
    });
});
