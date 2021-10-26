const websocket = new WebSocket("ws://localhost:8081");

// TODO: 
// 1. Get user name and store it in a variable
// 2. Create and enable text input
// 3. Add event listener to input, check for Enter key
//      - Add event listenter "keydown"
//      - if key is Enter => send message
// 4. Create message function that sends userName and message, stringify it!
// 5. Add event listener on websocket, when getting a message from server, display it!