// Broadcast the last message to all users except the sender
export default function broadcastMessage(message, server, senderName) {
    server.clients.forEach(client => {
        if(client.name.toLowerCase().trim() != senderName.toLowerCase().trim()) {
            client.send(JSON.stringify(message));
        }
    });
}