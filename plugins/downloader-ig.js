import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    if (!args[0]) {
        throw `> Por favor, ingresa un enlace de Instagram.`;
    }

    try {
        const apiUrl = `${apikasu}/api/dowloader/instagram?url=${args[0]}&apikey=${apikeykasu}`
        const response = await fetch(apiUrl);
        const responseData = await response.json();


        if (responseData.status && responseData.result.length > 0) {
            for (const media of responseData.result) {
                await conn.sendFile(m.chat, media.link, media.ext === 'mp4' ? 'video.mp4' : 'imagen.jpg', 'x', m);
            }
        } else {
            throw `
> Sin respuesta

No se pudo obtener el contenido de Instagram.`;
        }
    } catch (error) {
        console.error(error);
        throw `
> Sin respuesta

Ocurrió un error al procesar la solicitud: ${error.message};`
    }
};

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^(instagramdl|instagram|igdl|ig)$/i;

export default handler;
