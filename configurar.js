
const fs = require('fs')
const chalk = require('chalk')
// configura
global.owner = ['559784388524','559784388524'] //coloque seu nรบmero
global.packname = 'โ๐๐ค๐ง๐-๐ฝ๐ค๐ฉ' //mude se quizer
global.author = 'โ๐๐๐๐ฉ๐ค ๐ฅ๐ค๐ง:' //mude se quizer
global.nomedobot =  '๐๐ค๐ง๐-๐ฝ๐ค๐ฉ' //mude se quizer
global.limite = '900000'
global.prefixo = '/' //mude o prefixo aki

//configure o seu enquete aki
global.enquete = {
    titulo: "Venom รฉ o melhor",
    opรงรฃo1: "Sim ",
    opรงรฃo2: "Nรฃo",
    opรงรฃo3: "Talvez",
    opรงรฃo4: "Claro'"
}

global.reagir1 = '๐ฅ'
global.reagir2 = '๐'
global.reagir3 = 'โ'
global.reagir4 = '๐'
global.reagir5 = 'โ'
global.reagir6 = '๐คฃ'
global.reagir7 = '๐ถ'
global.reagir8 = '๐'
global.reagir9 = '๐คก'
global.reagir10 = '๐ค'
global.tzvenom = 'โฟเพเฝด'
global.ttzvenom = 'โบโบ'
global.tttzvenom = 'โ' 
global.textowelcome = '๐ด๐ฆ๐ซ๐ข ๐ฃ๐ฆ๐ฎ ๐ท๐ช๐ฏ๐ฅ๐ฐ ๐ข๐ฐ ๐จ๐ณ๐ถ๐ฑ๐ฐ' //mude se quizer
global.textoadeus = '๐ฑ๐ฆ๐ณ๐ฅ๐ฆ๐ฎ๐ด ๐ฎ๐ข๐ช๐ด ๐ฐ ๐ด๐ช๐ฎ๐ฐ๐ด๐ฆ ๐ฅ๐ฐ ๐จ๐ณ๐ถ๐ฑ๐ฐ' //mude se quizer

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

global.thumb = fs.readFileSync('./dados/fotos/sora.jpg')
let salvedvenom = require.resolve(__filename)
fs.watchFile(salvedvenom, () => {
	fs.unwatchFile(salvedvenom)
	console.log(chalk.redBright(`${__filename} foi atualizado`))
	delete require.cache[salvedvenom]
	require(salvedvenom)
})
