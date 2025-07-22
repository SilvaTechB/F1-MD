
const fs = require('fs');
const path = require('path');
const { File } = require('megajs');
const config = require('./config');

const SESSIONS_DIR = path.join(__dirname, 'sessions');
const SESSION_FILE = path.join(SESSIONS_DIR, 'creds.json');

async function ensureSession() {
  if (fs.existsSync(SESSION_FILE)) {
    console.log("✅ Session file exists.");
    return;
  }

  if (!config.SESSION_ID) {
    console.error("❌ Please set SESSION_ID in your environment.");
    process.exit(1);
  }

  const fileId = config.SESSION_ID.replace('Silva~', '');
  const file = File.fromURL(`https://mega.nz/file/${fileId}`);

  console.log("⬇️ Downloading session...");
  file.downloadBuffer((err, buffer) => {
    if (err) throw err;
    if (!fs.existsSync(SESSIONS_DIR)) fs.mkdirSync(SESSIONS_DIR);
    fs.writeFileSync(SESSION_FILE, buffer);
    console.log("✅ Session saved.");
  });
}

module.exports = { ensureSession };
