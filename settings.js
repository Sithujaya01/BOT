const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "JF_BOT" //namabot kalian
global.ownername= "Jayarathne_Technical" //nama kalian
global.myweb ="https://chat.whatsapp.com/JE6kSDzCnBr1xDJ9MVxaZ1" //bebas asal jan hapus
global.youtube = "https://chat.whatsapp.com/JE6kSDzCnBr1xDJ9MVxaZ1" //bebas asal jan hapus
global.github = "https://chat.whatsapp.com/JE6kSDzCnBr1xDJ9MVxaZ1" //bebas
global.email = "jayarathnefuneral@gmail.com" //bebas
global.region = "SriLanka" //bebas
global.ownernomer = "94778115292" // nomor wa kalian
global.ownernomerr = "+94778115292" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["94778115292","94777611095","94702978512"] //ganti agar fitur owner bisa di gunakan
global.packname = 'JF_BOT' //sticker wm ubah
global.author = 'JAYARATHNE_TECHNICAL' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','#','sik','Jf']
global.sp = '⭔'
global.mess = {
    sukses: '🍂 Done. Nice',
    admin: 'This Command is only for ```Jayarathne``` 🚫🙂',
    botAdmin: 'I`m not an ~Admin~ :(',
    owner: 'This Command is only for ```Jayarathne``` 🚫🙂',
    group: '👥 This feature can only be used in Group chat 🚫 ;)',
    private: 'The feature can only be used in private chat 🚫 ;)',
	bot: 'Bot Number Special Features :)',
    errtoimg: 'Not Supported ;(',
    wait: 'Processing... :)',
	lockCmd: 'Features Not Activated By JAYARATHNE ;(',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
