let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.mp4", 
     ` 
 test `.trim(), m)
};
handler.help = ["test"];
//handler.tags = ["img"];
handler.command = /^(test)$/i;
export default handler;

global.pack = [
  "https://file.io/gWubxgTzeejx",
];
