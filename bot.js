const Discord = require('discord.js');

const Client = new Discord.Client();

Client.warns = {};

Client.on('ready', () => {

   console.log('AntiSwearing is ready!!')
  
})

Client.on('message', (message) => {

    let warns = message.client.warns;
  
    if(!warns[message.author.id]) warns[message.author.id] = {warns:0};
  
    let swear = [
      "swear",
      "swear"
    ];
  
    for (let i = 0; i < swear.length; i++) {
      
        if(message.content.includes(swear[i])) {
          let warn = warns[message.author.id].warns;
          
          message.delete();
          
          if(warn == 0) message.reply('احترم نفسك ولا تسب, اول انذار لك .')
          if(warn == 1) message.reply('احترم نفسك ولا تسب, ثاني انذار لك .')
          if(warn == 2) message.reply('احترم نفسك ولا تسب, ثالث انذار لك .')
          if(warn == 3) {
            message.reply('بلعت ميوت عشان انك تسب')
            message.guild.member(message.author).addRole(message.guild.roles.find('name', 'blacklist.'))
            warn = 0;
            return;
          }
            
          return warn++;
          
        }
      
    }
  
})
