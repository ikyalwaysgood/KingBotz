//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "_" //ur yt chanel name
global.socialm = "_" //ur github or insta name
global.location = "Indonesia, Jakarta" //ur location

//new
global.botname = 'Kιɳα Bσƚ' //ur bot name
global.ownernumber = '6285794908894' //ur owner number
global.ownername = 'Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ' //ur owner name
global.websitex = "https://www.instagram.com/iky_alwaysgood?igsh=MXdwbXR3a2xxNjRocA=="
global.wagc = "https://whatsapp.com/channel/0029VaACVbGDuMRk7zy6vI3a"
global.themeemoji = '🗿'
global.wm = "Kιɳα Bσƚ"
global.botscript = 'Makan nih 🗿' //script link
global.packname = "Sticker By"
global.author = "Kιɳα Bσƚ\n\nIky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ"
global.creator = "6283133965901@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6283133965901"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})