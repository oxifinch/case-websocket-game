// Broadcast the last message to all users except the sender
export default function broadcastMessage(message, server, sender) {
    server.clients.forEach(client => {
        if(client != sender) {
            client.send(JSON.stringify(message));
        }
    });
}