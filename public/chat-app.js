const websocket = new WebSocket("ws://localhost:8081");

var userName = undefined
const chatLog = document.querySelector("#chat-log");
const chatBox = document.querySelector("#chat-prompt-input");

function createUserName() {
    const inputField = document.querySelector("#name-prompt-input");
    userName = inputField.value.trim();

    inputField.setAttribute("disabled", "disabled");
    inputField.classList.toggle("hidden");
    initChatBox();
}

function initNamePrompt() {
    console.log("HELLOOO!");
    document.querySelector("#name-prompt-button").addEventListener("click", () => {
        createUserName();
    });
    
    document.querySelector("#name-prompt-input").addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            createUserName();
        }
    });
}

function initChatBox() {
    const chatSection = document.querySelector("#section-chat");

    const inputField = document.querySelector("#chat-prompt-input");
    inputField.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            sendMessage();
        }
    })
    inputField.focus();
}

function initMessageListener() {
    websocket.addEventListener("message", (msg) => {
        const message = JSON.parse(msg.data);
        displayMessage(data);
    });
}

function sendMessage() {
    if(!chatBox.value || chatBox.value.trim() === "") {
        return;
    }
    const message = chatBox.value.trim();
    const now = new Date();
    const dateString = `${now.getHours()}:${now.getMinutes()}`;

    const messageObject = {
        message: message,
        name: userName,
        timeStamp: dateString
    };

    displayMessage(messageObject);
    websocket.send(JSON.stringify(messageObject));
}

function displayMessage(messageObject) {
    const newDiv = document.createElement("div");
    newDiv.className = "chat-message";
    newDiv.innerHTML = `
        <p> <span>${messageObject.name}</span> <pre>${messageObject.message}</pre> <em>${messageObject.timeStamp}</em>
    `;
    chatLog.appendChild(newDiv);
} 

function init() {
    initNamePrompt();
}
init();