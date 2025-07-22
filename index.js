
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const pino = require('pino');
const { handleMessage } = require('./lib/handlers/messageHandler');
const { ensureSession } = require('./sessionLoader');

async function startBot() {
  await ensureSession();

  const { state, saveCreds } = await useMultiFileAuthState('sessions');
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger: pino({ level: 'silent' }),
  });

  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('messages.upsert', async ({ messages }) => {
    if (!messages[0].message) return;
    await handleMessage(sock, messages[0]);
  });

  sock.ev.on('messages.delete', async (m) => {
    console.log("🚫 Message deleted:", m);
    // You can implement resending here using your config.ANTI_DEL_PATH
  });

  console.log('✅ F1-MD Bot is up!');
}

startBot();
