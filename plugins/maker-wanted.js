const uploadImage = require('../lib/uploadImage') 
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Reply atau send image dengan caption .wanted'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  await m.reply('*_TUNGGU SEBENTAR..._*')
let image = await q.download()
let gambar = await uploadImage(image)
let elyas = `https://api.popcat.xyz/wanted?image=${gambar}`
 await conn.sendFile(m.chat, elyas, 'wanted.jpg', 'Sudah jadi', m)
}
handler.help = ['wanted (reply gambar)']
handler.tags = ['maker']
handler.command = /^wanted$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
