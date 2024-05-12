const { getJson, getBuffer, command, isPrivate, sleep } = require("../lib/");

command({
    pattern: "help",
    fromMe: isPrivate,
    desc: "Anjan support",
    type: "support"
}, async (message) => {
    const name = '〆𝑹𝑶𝑴𝑬𝑲-𝑿𝑫👀🦋 ː͢»🎈', title = "〆𝑹𝑶𝑴𝑬𝑲-𝑿𝑫👀🦋 ː͢» 𝙎𝙐𝙋𝙋𝙊𝙍𝙏🦋", number = '918433897160', body = "〆𝑹𝑶𝑴𝑬𝑲-𝑿𝑫👀🦋 ː͢»";
    const image = "https://i.imgur.com/vDi7xjX.jpeg", sourceUrl = 'https://chat.whatsapp.com/IjDcqwedu89K0Di6rknAox';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 〆𝑹𝑶𝑴𝑬𝑲-𝑿𝑫👀🦋 ː͢»;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.jid, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});
