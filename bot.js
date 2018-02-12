const Discord = require("discord.js"); // use discord.js
const BOT_TOKEN = "MzgxNjM4NDQ4ODExMDgxNzI4.DPOZhg.SQ-iUXGKnxlW2iKO4H-16J0Au8M" // bot's token
const bot = new Discord.Client();
const PREFIX = "%" // bot's prefix

var eightball = [ // sets the answers to an eightball
   "yes!",
   "no...",
   "maybe",
   "probably",
   "100% yes",
   "never!",
   "you can try...",
   "up to you!",
]
var redeem = [
    "soon",
    ".",
]
var penis = [ // sets the answers to an penis
   "8=======================D",
   "8=D",
   "8==================================================D",
   "8================================D",
   "8=============D",
   "8===D",
   "you got none ha!",
   "8==================================================================D",
]
var rate = [ // sets the answers to an rate
   "10/10",
   "1/10",
   "0/10",
   "9/10",
   "6/10",
   "0.1/10",
   "8/10",
   "5/10",
   "3/10",
 ]
var coinflip = [

  "http://sheepbot.net/media/flipcoin/2.png",
  "http://sheepbot.net/media/flipcoin/1.png",

]


bot.on("ready", function() { // when the bot starts up, set its game to Use *help and tell the console "Booted up!"
   bot.user.setGame(`(%help) playing with ${bot.users.size} users in ${bot.guilds.size} guilds.`); // sets the game the bot is playing
   console.log("Booted up!") // messages the console Booted up!
});


bot.on("message", function(message) { // when a message is sent
   if (message.author.equals(bot.user)) return; // if the message is sent by a bot, ignore

   if (!message.content.startsWith(PREFIX)) return; // if the message doesn't contain PREFIX (*), then ignore


   var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
   var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
   var mutedrole = message.guild.roles.find("name", "muted");

   if (command == "help") { // creates a command *help
       var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
           .setTitle("**List of Commands**\n") // sets the title to List of Commands
           .addField(" - help", "Displays this message (Correct usage: %help)") // sets the first field to explain the command *help

           .addField(" - info", "Tells info about myself :smile:") // sets the field information about the command *info
           .addField("- invite", "gives you link to invite the bot (%invite)")
           .addField("- website", "gives you link to the bot website (%website)")
            .addField("**Fun commands**\n")
           .addField(" - ping", "Tests your ping ( %ping)") // sets the second field to explain the command *ping
           .addField(" - expose", "expose the gei person u (%expose)") // sets the second field to explain the command *G
           .addField(" - expose2", "expose the gei person above you (%expose2)") // sets the second field to explain the command *G
           .addField(" - candy", "Sends a candy to the desired player! :candy: (%candy @username)") // sets the third field to explain the command *cookie
           .addField(" - hug", "hug the person you luv (%hug @username)") // sets the third field to explain the command *hug
           .addField(" - 8ball", "Answers to all of your questions! (%8ball [question])") // sets the field to the 8ball command
           .addField("-penis", "Tells you your penis size!(%penis <text,user>)")
           .addField("- rate", "rate anything ya want (%rate)")
           .addField("- coinflip", "flips a coin (%coinflip)")
           .addField("- emotes", "gets all the emotes in a server (%emotes)")
           .setColor(0x00AE86) // sets the color of the embed box to orange
           .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
       var embedhelpadmin = new Discord.RichEmbed() // sets a embed box to the var embedhelpadmin
           .setTitle("**List of Admin Commands**\n") // sets the title
           .addField(" - say", "Makes the bot say whatever you want ( %say [message])")
           .addField(" - mute", "Mutes a desired member with a reason ( %mute @username [reason])") // sets a field
           .addField(" - unmute", "Unmutes a muted player (: %unmute @username)")
           .addField(" - kick", "Kicks a desired member with a reason ( %kick @username [reason])") //sets a field
           .setColor(0xFF0000) // sets a color
           .setFooter("Ooo, an admin!") // sets the footer
       message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
       if(message.member.roles.some(r=>[""].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too

       bot.on("guildDelete", guild => {

         // this event triggers when the bot is removed from a guild.

         console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

         bot.user.setGame(`on ${bot.guilds.size} servers`);

       });
       bot.on("guildMemberAdd", (member) => {
         const guild = member.guild;
         if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
         newUsers[guild.id].set(member.id, member.user);

         if (newUsers[guild.id].size > 10) {
           const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
           guild.channels.get(guild.id).send("Welcome our new users!\n" + userlist);
           newUsers[guild.id].clear();
         }
       });


       bot.on("guildCreate", guild => {
  console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});

   }

   if (command == "info") { // creates the command *info
       message.channel.send("Hello I am atpro's bot and I am very kool! do %help to see the list of Commands :smile:") // gives u info

   }
   if (command == "no") { // creates the command 8ball
    if (args[1] != null) message.reply(redeem[Math.floor(Math.random() * redeem.length).toString(16)]); // if args[1], post random answer
    else message.channel.send("you did something wrong");
    }
   if (command == "emotes") {
     const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
     message.channel.send(emojiList);
   }

   if (command == "ping") { // creates a command *ping
        message.react("💩")
       message.reply("Pong!"); // answers with "Pong!"
   }
   if (command == "invite") { // creates a command *ping
         var embedhelpmember = new Discord.RichEmbed()
       .addField("https://discordapp.com/oauth2/authorize?client_id=381638448811081728&scope=bot&permissions=8") // answers with "Pong!"
       .setFooter("invite to your server")
         .setColor(0xFF0000)
            message.channel.send(embedhelpmember);
 }
   if (command == "website") { // creates a command *ping
           var embedhelpmember = new Discord.RichEmbed()
          .addField("soon")// answers with "Pong!"
          .setFooter("bot site")
          .setColor(0xFF0000)
           message.channel.send(embedhelpmember);



   }
   if (command == "expose") { // creates a command *G
       message.channel.send("**:point_down: Get a load of this faggot lol :point_down:**"); // answers with "point_down: Get a load of this faggot lol :point_down!"
   }

   if (command == "expose2") { // creates a command *G
       message.channel.send("**:point_up: Get a load of this faggot lol :point_up:**"); // answers with "point_down: Get a load of this faggot lol :point_down!"
   }

   if (command == "candy") { // creates the command cookie
       if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " some candy! :candy:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
       else message.channel.send("Who do you want to send a candy to? :candy: (Correct usage: %candy @username)") // sends the error message if no-one is mentioned
   }

   if (command == "hug") { // creates the command hug
     if (args[1]) message.channel.send(message.author.toString() + " just gave a hug to " + args[1].toString() + " awwwwww :heart:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
     else message.channel.send("Who do you want to send a hug to? (Correct usage: %hug @username)") // sends the error message if no-one is mentioned
 }
   if (command == "8ball") { // creates the command 8ball
       if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
       else message.channel.send("Ummmm, what is your question? :rolling_eyes: (Correct usage: %8ball [question])"); // if not, error
     }
     if (command == "coinflip") { // creates the command 8ball
       var embedhelpmember = new Discord.RichEmbed()
  message.reply(coinflip[Math.floor(Math.random() * coinflip.length).toString(16)]); // if args[1], post random answer



     }
     if (command == "rate") { // creates the command 8ball
         if (args[1] != null) message.reply(rate[Math.floor(Math.random() * rate.length).toString(16)]); // if args[1], post random answer
         else message.channel.send("what do you want to rate? :rolling_eyes: (Correct usage: %rate [question])"); // if not, error

   }
   if (command == "penis") { // creates the command 8ball
       if (args[1] != null) message.reply(penis[Math.floor(Math.random() * penis.length).toString(16)]); // if args[1], post random answer
       else message.channel.send("use the command with a message :rolling_eyes: (Correct usage: %penis [question])"); // if not, error
   }


    if (command == "say") { // creates command say

        var sayMessage = message.content.substring(4)
        message.delete().catch(O_o=>{});
        message.react("💩")
        message.channel.send(sayMessage);
    }
    if (command == "poll") { // creates command say
        

                
               
                message.react("396879142101975040")
                message.react("396879107385982976")                
        
    }
   if(command === "purge") {
       let messagecount = parseInt(args[1]) || 1;

       var deletedMessages = -1;

       message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
           messages.forEach(m => {
               if (m.author.id == bot.user.id) {
                   m.delete().catch(console.error);
                   deletedMessages++;
               }
           });
       }).then(() => {
               if (deletedMessages === -1) deletedMessages = 0;
               message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
                   .then(m => m.delete(2000));
       }).catch(console.error);
   }

   if (command == "mute") { // creates the command mute
       if (!message.member.roles.some(r=>["Moderator"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
       var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
       if (!mutedmember) return message.reply("Please mention a valid member ") // if there is no kickedmmeber var
       if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("I cannot mute this member!") // if memebr is an admin
       var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
       var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
       var mutereason = mutereason.join(" "); // joins the list kickreason into one line
       if (!mutereason) return message.reply("Please gimme reason for the mute") // if no reason
       mutedmember.addRole(mutedrole) //if reason, kick
           .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
       message.reply(`${mutedmember.user} has been muted by ${message.author} because: ${mutereason}`); // sends a message saying he was kicked
   }

   if (command == "unmute") { // creates the command unmute
       if (!message.member.roles.some(r=>["Shop Owners"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
       var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
       if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
       unmutedmember.removeRole(mutedrole) //if reason, kick
           .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
       message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
   }

   if (command == "kick") { // creates the command kick
       if (!message.member.roles.some(r=>["Moderator","ADMINISTRATOR"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
       var kickedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
       if (!kickedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
       if (!kickedmember.kickable) return message.reply("I cannot kick this member!") // if the member is unkickable
       var kickreasondelete = 10 + kickedmember.user.id.length //sets the length of the kickreasondelete
       var kickreason = message.content.substring(kickreasondelete).split(" "); // deletes the first letters until it reaches the reason
       var kickreason = kickreason.join(" "); // joins the list kickreason into one line
       if (!kickreason) return message.reply("Please indicate a reason for the kick!") // if no reason
       kickedmember.kick(kickreason) //if reason, kick
           .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`)); //if error, display error
       message.reply(`${kickedmember.user.username} has been kicked by ${message.author.username} because: ${kickreason}`); // sends a message saying he was kicked
   }

if (command === "eval") {
  if (message.author.id !== "312341294032748544") return;
  try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }


});
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


bot.login(BOT_TOKEN); // connects to the bot
