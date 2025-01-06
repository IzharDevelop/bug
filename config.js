require("./lib/module")

// SETTING KONTAK
global.owner = "6285641712420"
global.ownername = "𝐁𝐚𝐫𝐳-𝐁𝐮𝐠𝐱"
global.nomorbot = "6285641712420"
global.namaCreator = "𝐁𝐚𝐫𝐳"
global.Dec = "𝐁𝐚𝐫𝐳-𝐕𝟑"
global.autoJoin = false
global.antilink = false

// THUMBNAIL (BEBAS GANTI)
global.imageurl = 'https://cdn.elxyzgpt.xyz/file/SYIGr5seSt.png'
global.channel = 'https://whatsapp.com/channel/0029VaxuC71LNSa190t35b3x'

// STICKER
global.packname = "𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐁𝐲"
global.author = "𝐁𝐀𝐑𝐙-𝐁𝐔𝐆𝐗"
global.jumlah = "5"


















// RESPON BOT
global.onlyprem = `\`[𝐁𝐀𝐑𝐙-𝐕𝟑]\` \n*Only Premium User*`
global.onlyown = `\`[𝐁𝐀𝐑𝐙-𝐕𝟑]\` \n*Only Owner User*`
global.onlygroup = `\`[✰𝐁𝐀𝐑𝐙-𝐕𝟑]\` \n*Only in grub*`
global.onlyadmin = `\`[✰𝐁𝐀𝐑𝐙-𝐕𝟑]\` \n*Only Admin User*`
global.notext = `\`[✰𝐁𝐀𝐑𝐙-𝐕𝟑]\` \n*Teks?*`
global.noadmin = `\`[✰𝐁𝐀𝐑𝐙-𝐕𝟑]\` \n*𝘉𝘰𝘵 Not Admin*`
global.succes = `\`[✰𝐁𝐀𝐑𝐙-𝐕𝟑]\` \n*Succes Brothers*`
global.invalid = `\`[✰𝐁𝐀𝐑𝐙-𝐕𝟑]\` \n*Number not valid*`
global.bugrespon = `\`[✰𝐁𝐀𝐑𝐙-𝐕𝟑]\` \n*Prosesing To send Bug 🐞*`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})