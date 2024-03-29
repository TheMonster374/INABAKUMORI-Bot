import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios'
import {bestFormat, getUrlDl} from '../lib/y2dl.js';
const handler = async (m, { conn, usedPrefix, command, text, args}) => {
  if (!args[0]) throw '*_ingresa un enlace de youtube_*\n\n*ejemplo:* .yta https://youtu.be/fsdQDNQ0r3U?si=wNqaBKb5QhCrLZ97';  
  let enviando;
  if (enviando) return  
      enviando = true      
  let youtubeLink = '';
  if (args[0].includes('you')) {
    youtubeLink = args[0];
  } else {
    const index = parseInt(args[0]) - 1;
    if (index >= 0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find((item) => item.from === m.sender);
        if (matchingItem) {
          if (index < matchingItem.urls.length) {
            youtubeLink = matchingItem.urls[index];
          } else {
            throw `
No se encontro enlace para ese numero, intente del 1 al ${matchingItem.urls.length}`;
          }
        } else {
       throw `usa el comando de la siguiente manera ${usedPrefix + command} <numero>, y para buscar una playlist usa el siguiente comando: ${usedPrefix}playlist <texto>`;
        }
      } else {
        throw `usa el comando de la siguiente manera ${usedPrefix + command} <numero>, y para buscar una playlist usa el siguiente comando: ${usedPrefix}playlist <texto>`;
      }
    }
  }
  const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m});
  try {
    const formats = await bestFormat(youtubeLink, 'audio');
    const dl_url = await getUrlDl(formats.url);
    const buff = await getBuffer(dl_url.download);    
    const yt_1 = await youtubedl(youtubeLink).catch(async (_) => await youtubedlv2(youtubeLink));
    const ttl_1 = `${yt_1?.title ? yt_1.title : ''}`;
    const fileSizeInBytes = buff.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
   if (fileSizeInMB > 50) {
    m.react(done)
    await conn.sendMessage(m.chat, {document: buff, caption: `
> Informacion

*Titulo:* ${ttl_1}
*Peso:* ${roundedFileSizeInMB} MB`, fileName: ttl_1 + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
    await conn.sendMessage(m.chat, {text: `
> Informacion

ꜱɪ ꜱᴇ ᴇɴᴠɪᴏ ᴇɴ ꜰᴏʀᴍᴀᴛᴏ ᴅᴇ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ᴇꜱ ᴘᴏʀ Qᴜᴇ ᴇʟ ᴀᴜᴅɪᴏ ꜱᴜᴘᴇʀᴀ ᴇʟ ʟɪᴍɪᴛᴇ ᴇꜱᴛᴀʙʟᴇᴄɪᴅᴏ ᴘᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ
*Titulo:* ${ttl_1}`, edit: key}, {quoted: m});
    enviando = false
   } else {
    await conn.sendMessage(m.chat, {audio: buff, caption: `
*Titulo:* ${ttl_1}
*Peso:* ${roundedFileSizeInMB} MB`, fileName: ttl_1 + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
    await conn.sendMessage(m.chat, {text: `Enviado`, edit: key}, {quoted: m});
    enviando = false   
   }    
  } catch {
    console.log('noooooo')
  try {
    const q = '128kbps';
    const v = youtubeLink;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size = await yt.audio[q].fileSizeH;
    await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, {mimetype: 'audio/mpeg'});
    await conn.sendMessage(m.chat, {text: '', edit: key}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`${lolhuman}/api/ytaudio2?apikey=${spotifykey}&url=${youtubeLink}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      m.react(done)
      await conn.sendMessage(m.chat, {audio: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
      await conn.sendMessage(m.chat, {text: 'Enviado', edit: key}, {quoted: m});
    } catch {
      try {
        const searchh = await yts(youtubeLink);
        const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
        const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
        const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
        conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
        await conn.sendMessage(m.chat, {text: 'Enviado', edit: key}, {quoted: m});
      } catch {
        await conn.sendMessage(m.chat, {text: `
> Sin respuesta

Error`, edit: key}, {quoted: m});
        throw 'Error';
      }
    }
  }
}};
handler.help = ['yta <yt url>']
handler.tags = ['downloader']
handler.command = /^(audio|txmp3|dlmp3|getaud|yt(a|mp3))$/i;
export default handler

const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });

    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};
