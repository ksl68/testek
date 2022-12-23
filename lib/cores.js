const chalk = require("chalk")

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const mylog = (text, color) => {
return !color ? chalk.whiteBright("sora md") + chalk.greenBright(text) : chalk.greenBright("sora md") + chalk.keyword(color)(text)
}

module.exports = {
color,
mylog
}
