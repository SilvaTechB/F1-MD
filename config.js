
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "",
  PREFIX: process.env.PREFIX || ".",
  BOT_NAME: process.env.BOT_NAME || "✦ F1 ✦ MD ✦",
  OWNER_NAME: process.env.OWNER_NAME || "✦ F1✦ MD ✦",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254700143167",
  DESCRIPTION: process.env.DESCRIPTION || "*© ✦ F1 ✦ MD ✦*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BVt9McxS/photo-2025-06-15-12-14-29-7516148628621099032.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> F1 IS SPEEDING ACTIVE AND ALIVE\n\n\nKEEP USING SILVA SPARK FROM SILVA TECH INC⚡",
  MODE: process.env.MODE || "public",
  PUBLIC_MODE: convertToBool(process.env.PUBLIC_MODE || "true"),
  AUTO_REPLY: convertToBool(process.env.AUTO_REPLY || "false"),
  AUTO_TYPING: convertToBool(process.env.AUTO_TYPING || "true"),
  AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN || "true"),
  AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY || "true"),
  AUTO_STATUS_MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by F1 MD 🚀🔥*",
  convertToBool
};
