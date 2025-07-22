
const alive = require('../plugins/alive');
const sticker = require('../plugins/sticker');
const tts = require('../plugins/tts');

async function handleCommand(sock, jid, cmd, args, msg) {
  switch (cmd) {
    case 'alive':
      await alive(sock, jid);
      break;
    case 'sticker':
      await sticker(sock, jid, msg);
      break;
    case 'tts':
      await tts(sock, jid, args);
      break;
    default:
      await sock.sendMessage(jid, { text: '❌ Unknown command.' });
  }
}

module.exports = { handleCommand };
