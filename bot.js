const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const stringSimilarity = require('string-similarity');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot WhatsApp siap!');
});

// --- Keyword list ---
const keywords = ["buy", "ios", "andro", "list", "ada"];

client.on('message', async msg => {
    const text = msg.body.toLowerCase();
    const match = stringSimilarity.findBestMatch(text, keywords);

    if (match.bestMatch.rating > 0.5) {
        console.log(`📩 Pesan mirip: ${match.bestMatch.target}`);

        // Kirim gambar dengan caption custom
        const media = await MessageMedia.fromUrl("http://444u.my.id/allpay.jpg");
        await client.sendMessage(msg.from, media, { 
            caption: "gasskan aja ss tf\n\n> bot by rootx"
        });
    }
});

client.initialize();
