import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
   let res = await fetch('https://api.waifu.im/milf')
   if (!res.ok) return 
   let json = await res.json()
   if (!json.url) return 
   await conn.sendFile(m.chat, json.url, 'neko.png', '*_Neko_*', m)
}

handler.help = ['neko']
handler.tags = ['img']
handler.command = ['TEST']

export default handler
