const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '6285808936396',
  atasnama : 'Nishikigi Chisato'
}

// Other
global.owner = ['6283102650464',"6282135724604"]
global.premium = ['6283102650464']
global.profilebio = ['6283102650464'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.sponsor = 'https://shop.tokotalk.com/chaosgamingidstores/home'
global.packname = 'Elaina-Bot'
global.footer = '© 2022 Nishikigi Chisato'
global.author = 'Owner : Nishikigi Chisato\nIg1 : @me_kyluesky'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'please wait a moment, processing data...',
		den:'*Sorry You Not Register Yet...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Loading Please Wait..',
		error:'Error :(',
		success:'Success bang!',
		repiar:'This Feature Maintace!',
		botadm:'Jadiin gw admin dulu!',
		admin:'Khusus admin woi!',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://telegra.ph/file/248851e2d6dbd7cda88e3.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
