import fs from "fs";

export default function saveMessage(filepath, message) {
    const content = message + ",";
    fs.appendFile(filepath, content, err => {
        if(err) {
            console.log(err);
            return;
        }
    });
}