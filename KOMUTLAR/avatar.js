const Discord = require('discord.js');
const ms = require('ms');
exports.run = async(client, message, args) => {
   if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;
    let üye = message.mentions.users.first() || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    let embed = new Discord.MessageEmbed()
    .setImage(üye.avatarURL({ dynamic: true, size: 2048 }))
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['avtr','av','pp'],
  permLevel: 0
};

exports.help = { 
  name: 'avatar'
};