const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
	fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
	conn.p[id] = [
	await conn.sendKontak(m.chat, kontak2, fkontak, { contexInfo: { forwardingScore: 99999, isForwarded: true } })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `𝑯𝒂𝒚 𝒌𝒂𝒌 @${await m.sender.split('@')[0]}, 𝒊𝒕𝒖 𝒏𝒐𝒎𝒆𝒓 𝒐𝒘𝒏𝒆𝒓 𝒌𝒖, 𝒄𝒉𝒂𝒕 𝑷 𝒕𝒊𝒅𝒂𝒌 𝒂𝒌𝒂𝒏 𝒅𝒊 𝒓𝒆𝒔𝒑𝒐𝒏`, mentions: [m.sender] }, { quoted: conn.p[id][0] })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
