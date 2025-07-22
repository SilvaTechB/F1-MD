
const { handleCommand } = require('./commandHandler');

async function handleMessage(sock, message) {
  const msg = message.message?.conversation || message.message?.extendedTextMessage?.text;
  const sender = message.key.remoteJid;

  if (!msg) return;
  if (msg.startsWith('.')) {
    const [cmd, ...args] = msg.slice(1).split(' ');
    await handleCommand(sock, sender, cmd.toLowerCase(), args);
  }
}

module.exports = { handleMessage };
