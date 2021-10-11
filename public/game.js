const websocket = new WebSocket("ws://localhost:8081");

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 480;