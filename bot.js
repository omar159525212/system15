const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
 
 
 
 
 
 
 
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
 
client.user.setGame("!help", "https://www.twitch.tv/alpha");
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {
        let pages = [`
    ***__وصف عن البوت__***
    **
    :gem:  البوت فيه كثير ميزات حلوة و جميلة
     ا:rocket: البوت يعمل قرابة 24 ساعة
    **
            ***__General orders__***
    **
    『?serv /يعرض لك معلومات عن السيرفر』
    『?serv2 / يعرض لك معلومات عن السيرفر ( الكود الثاني ) للمعلومات』
    『?id / يعرض لك معلومات عنك』
    『?myroles / لرؤية جميع رتبك الشخصية بالسيرفر』
    『?id / يعرض لك معلومات عنك』
    『?link / لمعمل انفايت ( دعوة ) لشخص』
    『?inv / لدعوة البوت الى سيرفرك』
    『?support / سيرفر المساعدة』
    『?cmind / لكتابة اي شيء تقوله داخل صورة』
    『?servavatar / لرؤية صورة السيرفر』
    『?count / لرؤية عدد الاعضاء بالسيرفر』
    『?avatar / لرؤية صورة شخص 』
    『?bot-info / لرؤية معلومات عن البوت 』
    『?report / لرفع شكوى على عضو 』
    『?servers / لرؤية عدد السيرفرات التي داخل بها البوت 』
    『?myid / لمعرفة الايدي الخاص بك 』
    **
      `
    ,`
            ***__Admin orders__***
    **
    『?clear / لحذف الشات 』
    『?mc / لقفل الشات  』
    『?unmc / لفتح الشات 』
    『?bc / لارسال رسالة لجميع اعضاء السيرفر 』
    『?kick / لطرد شخص من الدسكورد 』
    『?ban / لاعطاء شخص باند من الدسكورد 』
    『?mute / لاعطاء شخص ميوت 』
    『?unmute / لفك ميوت شخص 』
    『?ct / لانشاء روم كتابي 』
    『?cv / لانشاء روم صوتي 』
    『?rolebc / برود كاست للرتب 』
    **
      `
    ,`
            ***__Games orders__***
    **
    『?لعبة صراحة / صراحة 』
    『?لعبة كت تويت / كت تويت 』
    『?لعبة لو خيروك / لو خيروك』
    『?rps / لعبة حجرة ورقة مقص 』
    『?اسئلة للعبة فورت نايت /  فورت نايت 』
    **
       
    `]
        let page = 1;
     
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page-1])
     
        message.author.sendEmbed(embed).then(msg => {
     
            msg.react('◀').then( r => {
                msg.react('▶')
     
     
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
     
     
            const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
     
     
     
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
         
          page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            })
        })
        }
    });
    client.on('message', message => {
        if(message.content === '?help') {
            message.reply('تم ارساله بالخاص :white_check_mark: ');
        }
    });

client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
      // By Alpha Codes - AboKhalil 26/7/2019
  let command = args[0];
 
  let user = message.mentions.users.first();
   
  let reasonkick = message.content.split(" ").slice(2).join(" ");
 
  if (command == prefix + "kick") {
 
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `KICK_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `KICK_MEMBERS`**");
    }
    if (!user) {
        message.channel.send("**يجب عليك إختيار الشخص المراد طرده**");
    }else if (!reasonkick) {
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    } else if (message.guild.member(user).hasPermission("KICK_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
 
 
    message.guild.member(user).kick()
    message.channel.send("**The Member Was Kicked **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonkick + "__**");
   
    user.send("**You are Kicked By** : " + message.author.tag);
    user.send("**Reason : __" + reasonkick + "__**");
    }
 }
 // By Alpha Codes - AboKhalil 26/7/2019
});


client.on('message', message => {
  if (message.author.bot) return;

  let args = message.content.split(" ");
  
  let command = args[0];
  
  let messagecount = args[1];
  
    if(command == prefix + "clear") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
		message.channel.send("يجب ان تمتلك خاصية `MANAGE_MESSAGES` ")
	} else if (!messagecount) {
		message.channel.send("**قم بإدراج عدد الرسائل المراد حذفها**")
	}else {
		message.channel.bulkDelete(messagecount);
        message.channel.send("**رسالة `" + messagecount + "` لقد تم حذف**").then(mes => 
		mes.delete(3000)
		);    
	 }
   }
  // By Alpha Codes - AboKhalil 26/7/2019
});




client.on('message', message => {
  var prefix = '!';
 
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
      if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك صلاحية الباند**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("البوت لايملك صلاحيات الباند");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن الشخص اللي تريد تبنيده**");
  if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني تبنيد هذا الشخص**");

  message.guild.member(user).ban();

  const banembed = new Discord.RichEmbed()
  .setAuthor(`تم تبنيد العضو`, user.displayAvatarURL)
  .setColor("#502faf")
  .setTimestamp()
  .addField("**العضو الي تبند:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**العضو اللي قام بتبنيده:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});











    client.login(process.env.BOT_TOKEN);
