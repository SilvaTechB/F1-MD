module.exports = async (sock, jid, args) => {
  await sock.sendMessage(jid, {
    text: "✅ Plugin 'define' is active.",
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363200367779016@newsletter',
      newsletterName: 'F1 md',
      serverMessageId: 144
    }
}
  });
};