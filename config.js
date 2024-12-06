//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348130548463";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUlWd290ZUt6bS9LcGI5NnpqL1lCdVpuOEoxYXB1SGw3S1hleXhnKy9IWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczJmTkFLaGwvL3U1ZzBGUXFmNEhOK1Y5V1kvR0pIZ1M4UWxmb1BsOVlScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUEszb1BpZ0p0YVV3YzdhN3pmQmkwazJzcmh6U3lPRHNHRWRTOThGNkhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrY1c0czhWYkdzMVFrVkxCMSszZVJaZW1rTlY1U24wNkZCdjRvZHpwMlVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIZ1BROGVNdXF5S1Q2YStsWGJ6Z043V3VrbDhOU3VYNGhzVkx0NHMrVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1YOXlWL2MzOGU4Zi9Qb0h1MUZSMFFSK0hldks0UG1yWGRCeFBLRVVka2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU53MC84K2JxeTFCOTdkaHpFTG9BUW1PZm00dnBHQ0g4TGVRTlZEU1Yzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2xEVldGczZra2QzaFF5K3NlaGE1VFlSTUVOc0VxSVlvUnlpbmJ3NGxFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFTlZ0QUNWVk41T3BDQ3lnSTd5UFNlZFJtSUR4RGtaM1R6eklHTFVCV3ZCaVpCdWJsOFdrMVoycGFHbXZHMVAvWVFiRWc1dXFSenZBRW81SUpCNWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6IlZnTFVidDJwMmlzZzFINVBoNWxLeHJMcmhHcjVUY2ZXNGU2Vm01ekh0RjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEzMDU0ODQ2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMjNBOTRBOEM4MzQ1NkZDMjI4MUE1QzE1QUNGRkI5QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNTIxNTAzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTMwNTQ4NDYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk3ODIxQTNEMkU1NDhBMjJERUY1NDhDODE3QjE3RDMxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM1MjE1MDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMzA1NDg0NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEFFMUY5MjQ3OUQwQkU1N0IyQTdDMTJDRDdGNjIxRjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzUyMTUwNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVHNlcGtYdVFSaC1qSmhOSTFybDAxQSIsInBob25lSWQiOiJiM2RjYTc3ZS1jNzYyLTRmNmUtODNjOC05YTdiNjE5ZDVhYzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VXSnVnNitnamN3MzFLT0R3U0NFd2k4RmUwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtVejNhTElFcVUxUndNUUxqaU90bUNHL1dqQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXNzYyNVY4SiIsIm1lIjp7ImlkIjoiMjM0ODEzMDU0ODQ2MzozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRhbm55In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOYTB1TEVDRU0vZ3pib0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMaDRveFBGTDFONlVQM2ZTNENsR3NpSGpzdDIrVGFTRDh6ZVdFZUhGcFJnPSIsImFjY291bnRTaWduYXR1cmUiOiJQLzF2TXVtbU91SEVyeUlCenoxSlc2TVd2aDBXMDZPTENZSENrMmlTdndoRUp1RTFYNFUzNmQ4a1RPV082UzFwTmc3QllWdlVWNTlQVnl2SkhGaTdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiLzRyRnBUSTVUYUdtLzEvbXZwL0xOT01VMDBPYjdkWmd4bFBvcytSSEsrZlRvQkJ3VFlyWC81S0lFYkwvODJkV0xtYTM3NUpQejZPRTFSRXdaalVrakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTMwNTQ4NDYzOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzRlS01UeFM5VGVsRDkzMHVBcFJySWg0N0xkdmsya2cvTTNsaEhoeGFVWSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzUyMTUwMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQelUifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
