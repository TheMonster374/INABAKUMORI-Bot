import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `[📚] 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒅𝒆 𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎\n\n[💡] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: ${usedPrefix + command}* https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link`;
  m.reply(`*⚡️ ᴅᴇsᴄᴀʀɢᴀɴᴅᴏ sᴜ ᴠɪᴅᴇᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴛᴇ ᴘʀᴏᴄᴇsᴏ ᴘᴜᴇᴅᴇ ᴅᴜʀᴀʀ ᴇɴᴛʀᴇ 2 ʏ 10 ᴍɪɴᴜᴛᴏs ᴅᴇᴘᴇɴᴅɪᴇɴᴅᴏ ᴅᴇ ʟᴀ ᴅᴜʀᴀᴄɪᴏɴ ᴅᴇʟ ᴠɪᴅᴇᴏ...*`);
  try {
    const apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`;
    const responsel = await axios.get(apiUrll);
    const resultl = responsel.data;
    for (const item of resultl.message) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text();
      const tXXxt = `𝑨𝒒𝒖𝒊 𝒕𝒊𝒆𝒏𝒆𝒔 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐`.trim();
      conn.sendFile(m.chat, item._url, null, tXXxt, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {    
  try {
    const datTa = await instagram.v1(args[0]);
    for (const urRRl of datTa) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
      const tXXxt = `𝑨𝒒𝒖𝒊 𝒕𝒊𝒆𝒏𝒆𝒔 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐`.trim();
      conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {
      try {
        const resultss = await instagramGetUrl(args[0]).url_list[0];
        const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        const txt2 = `𝑨𝒒𝒖𝒊 𝒕𝒊𝒆𝒏𝒆𝒔 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐`.trim();
        await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
      } catch {
        try {
          const resultssss = await instagramdl(args[0]);
          const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
          const txt4 = `𝑨𝒒𝒖𝒊 𝒕𝒊𝒆𝒏𝒆𝒔 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐`.trim();
          for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
        } catch {
          try {
            const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
            const json = await human.json();
            const videoig = json.result;
            const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
            const txt1 = `𝑨𝒒𝒖𝒊 𝒕𝒊𝒆𝒏𝒆𝒔 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐`.trim();
            await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
          } catch {
            throw `Ocurrio un error, intentalo denuevo`;
          }
        }
      }
    }
  }
};
handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i;
export default handler;
