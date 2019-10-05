const Discord = require("discord.js");
const client = new Discord.Client();
const bugs = require("./Report.json")
const fs = require("fs")
var prefix = "!";
 
 
client.on("message", TheReport => {
 
  const args = TheReport.content.slice(prefix.length).trim().split(/ +/g);
 
if(TheReport.content.startsWith(prefix + "report")) {
  TheReport.delete();
  if(TheReport.content === '${prefix}report') return TheReport.channel.send("**write your bug**").then(msgR =>msgR.delete(4000));
 bugs[TheReport.author.id] = {
  message: args.slice(1).join(""),
  by: TheReport.author.id
 }
fs.writeFile("./Report.json", JSON.stringify(bugs, null , 4), err =>{
  console.log(err);
  })
  }
 
}
 
 
 
)
 
 
client.on("message", msg => {
  if(msg.author.id != "575229517828849674") return msg.channel.send("you cant do this command").then(newmessage =>newmessage.delete(4000));
  if (msg.content.startsWith(prefix + "bugs")){
    msg.delete();
    let data = undefined;
  for(i in bugs){
      if (data === undefined) {
        data = "";
      }
      let data1 = bugs[i].message
      let data2 = bugs[i].by
      const stuff = `${data1} **By** <@${data2}>`;
      data += (stuff) + "n";
    }
    if (data !== undefined) {
      const richEmbed = new Discord.RichEmbed();
      richEmbed.addField("Messages", data)
      msg.channel.send(richEmbed)
    }
  }
})







client.login(process.env.BOT_TOKEN);
