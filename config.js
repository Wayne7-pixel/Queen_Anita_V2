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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0N6V09YNy92bEd6T0pTTmUrR0wzTHEwMkNKZTZPbmMvVmFzcDc5TjZraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFpTcit3REs1azI2cFI3L1pDRzZtOWozMHR0MlMzdWoxZEliNXRqbW9WQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUEY0TG8xcUlsVnlHMFd4ZDZzb0VYeDRGS090K254ZXBmN1kxMTFkczJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvV2x6NEJRaHZMWllkTzdkVW5tTmtlcEhHYkg3QjdHV0RNVGJ5Mm9sb1c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DRnh1OTYzVkR0RkdMeE5VYm8xY1NBeEZVeXpud2JvTmN3LzRwMm9EVm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFM2FHUmc1VDNjMjRpTldFOHI4b3hDc2dxVitKamc1TnFaSG5Cd3I4ams9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpMaUxPTzdqNDhXYWFUUkEyTTVHU1MyY3FKeG9RQUgzaFpKaTlTS0NYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkpWRWVhVGZxNUcwV1MwVnFpV1JGQVJ3NGNuMkN0emlZL2VtNnV6dTNIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9ZWXpUNjRuKzZtR1ByeXE1Nmt0V1hCQ2NFN0ZkQmRUZWIvVlp6WUtuL20rcjRldmlHdlRVVGg1VHNNcjFtWGpRRlpsdDJtaEtYbmp4U2ZTMy8xL0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IjNoVUNLV0VJdzZtVVVscUVQYzJ4M2ZOMDVmNkdkM0Q5bkpjdzJOSmEySXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEzMDU0ODQ2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyQUMwMUQ0REFBMDcxNEM2QzVGQ0NFQUQxNTBBOTQwMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNTIzODUwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTMwNTQ4NDYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZFRUMwQTU0MDczNUZGNjEwM0RCQTFGRjM4ODQ4NEE2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM1MjM4NTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZWWHJuY1BlUkZ5N3hnb1ZrMDQzZFEiLCJwaG9uZUlkIjoiNTg3MmU3NWMtYWNmYy00NzdlLWJlYjEtNzZiNDQ5ODQzZjc1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRFOGd1UnpvaGlFV2xROHdoOUNDcGl1RVJsaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEcWxwYkV2K0oyKzJuRjFRWjl4Z2x4Z3NkQzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWE4zWlRRQlAiLCJtZSI6eyJpZCI6IjIzNDgxMzA1NDg0NjM6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEYW5ueSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmEwdUxFQ0VQcnl6Ym9HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTGg0b3hQRkwxTjZVUDNmUzRDbEdzaUhqc3QyK1RhU0Q4emVXRWVIRnBSZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSmpOTmRxWmc1S3dYRURSZVR6Vkd3emN6eVB4Wm1JU3R4a0F6bFp2T0JLZUNOdmVvbUdqcHVNWXNnSDFpajRJREpTUlFkdXR5RWJFRVM4Mk50TkF6QWc9PSIsImRldmljZVNpZ25hdHVyZSI6InlVSWNoSzZaYTNFQjFpMUNkQVRNV0dBZmE3bjFsTWorL2x3WitJV0JzUXIvUXBGSHJ4eWk5RU11S0U2RVdlOTFqaG9yaitDcHk2czhwNGs1RmR2Z0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzMDU0ODQ2Mzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM0ZUtNVHhTOVRlbEQ5MzB1QXBSckloNDdMZHZrMmtnL00zbGhIaHhhVVkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM1MjM4NDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHpVIn0="
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
