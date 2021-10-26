export default function parseMessage(data) {
    let message;
    try {
        message = JSON.parse(message);
    } catch {
        message = {
            type: "status",
            message: "Parsing failed.",
        };
    }

    return message;
}