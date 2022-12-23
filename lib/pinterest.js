//════════════════════════════//
//Se você quiser recodificar, reenvie 
//ou copie os códigos/scripts, 
//por favor dê os créditos 
// sem crédito? vou agir imediatamente 
//© 2022 Venom Mods Inc. sora Bot MD 
//Obrigado a todos que me ajudaram,
//════════════════════════════// 
//códigos criptografados para evitar copias 
// se inscreve nomeu canal Venom Mods
//post bots e imunes.💗
//════════════════════════════// 
//Se você recodificar e enviar em seu canal 
//ou tentar kibar a script,
//eu não dou permissão para fazer isso
//coloca o link do meu canal nos vídeo 
//descrição e me marque, // obrigado 😍
//════════════════════════════//

const gis = require("g-i-s")

async function pinterest(query) {
	return new Promise((resolve, reject) => {
	  let err = { status: 404, message: "There is an error" }
	  gis({ searchTerm: query + ' site:id.pinterest.com', }, (er, res) => {
	   if (er) return err
	   let hasil = {
		  status: 200,
		  creator: 'Venom',
		  result: []
	   }
	   res.forEach(x => hasil.result.push(x.url))
	   resolve(hasil)
	  })
	})
}

module.exports.pinterest = pinterest