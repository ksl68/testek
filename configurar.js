
const fs = require('fs')
const chalk = require('chalk')
// configura
global.owner = ['559784388524','559784388524'] //coloque seu número
global.packname = '❀𝙎𝙤𝙧𝙖-𝘽𝙤𝙩' //mude se quizer
global.author = '❀𝙁𝙚𝙞𝙩𝙤 𝙥𝙤𝙧:' //mude se quizer
global.nomedobot =  '𝙎𝙤𝙧𝙖-𝘽𝙤𝙩' //mude se quizer
global.limite = '900000'
global.prefixo = '/' //mude o prefixo aki

//configure o seu enquete aki
global.enquete = {
    titulo: "Venom é o melhor",
    opção1: "Sim ",
    opção2: "Não",
    opção3: "Talvez",
    opção4: "Claro'"
}

global.reagir1 = '🔥'
global.reagir2 = '💖'
global.reagir3 = '✅'
global.reagir4 = '😍'
global.reagir5 = '❗'
global.reagir6 = '🤣'
global.reagir7 = '🎶'
global.reagir8 = '🔎'
global.reagir9 = '🤡'
global.reagir10 = '🤖'
global.tzvenom = '✿ྀུ'
global.ttzvenom = '››'
global.tttzvenom = '⁞' 
global.textowelcome = '𝘴𝘦𝘫𝘢 𝘣𝘦𝘮 𝘷𝘪𝘯𝘥𝘰 𝘢𝘰 𝘨𝘳𝘶𝘱𝘰' //mude se quizer
global.textoadeus = '𝘱𝘦𝘳𝘥𝘦𝘮𝘴 𝘮𝘢𝘪𝘴 𝘰 𝘴𝘪𝘮𝘰𝘴𝘦 𝘥𝘰 𝘨𝘳𝘶𝘱𝘰' //mude se quizer

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
