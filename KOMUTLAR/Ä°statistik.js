const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const msg = message

  var en = require("../../language/english");
  var tr = require("../../language/turkish");

  var dil = db.fetch(`language_${msg.guild.id}`)

if(dil == "en") {
  var lang = en
} 
if(!dil) {
var lang = tr
}

   const bunemq = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.MessageEmbed()

  .setColor('RANDOM')
  .setFooter('XRD-ENDERMAN  \'Buyur benim istatistiklerim', bot.user.displayAvatarURL())
  .setThumbnail(bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
  .addField("» **Botun Sahibi**", "<idniz>| ISMINIZ  ")//XRD-EnDeRmAn#9464 BOYLE OLCAK
  .addField("»  **Geliştirici** ","<idniz>| BURAYADA GELISTIRICI EGER YOKSA BOS BIRAKIN VEYA KENDINIZI I ISMINI YAZIN ")//XRD-EnDeRmAn#9464 BOYLE OLCAK
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", bunemq)
  .addField('» **Kullanıcılar**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ws.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
  .addField("**» Bot Davet**", " [Davet Et](BOTUNUZUN DAVET ETME LINKI)")
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/DESTEK SUNUCUNUZ)")
  .addField("**» Voteleme sayfası**", " [OYLAR MISIN?](https://top.gg/bot/EGER top.gg de onasyliysa buraya botun idsini yaz/vote)")

 return message.channel.send(annencilermaldır);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};