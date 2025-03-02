const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "enter your session",
    CAPTION: process.env.CAPTION || "POWERED BY RIAZ HUSSAIN",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/FbGBCn5c",
    ALIVE_MSG: process.env.ALIVE_MSG || "HI DEAR I'M ONLINE I'M RIAZ-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    DEV: process.env.DEV || "923181393964",//replace with your whatsapp number        
    ANTI_VV: process.env.ANTI_VV || "true",// true for anti once view 
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change it to 'same' if you want to resend deleted message in same chat
    OWNER_REACT: process.env.OWNER_REACT || "true",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "➺RIAZ_MD࿐",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү -RIAZ-MD`",
    STATUS_REACT: process.env.STATUS_REACT || "false",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
