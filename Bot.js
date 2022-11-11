import pkg from 'discord.js';
import cmddata from 'quick.db'
import Create from "./Function/CreateBot.js"
import got from "./Function/CreateBot.js"
const { Client, MessageEmbed } = pkg;
const devmode = false
const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS"],
    disableEveryone: true
});

let checkinterval;
let updating = false
let BotData
let disabledcmd = []
let restarted = 0
cmddata.get(`84416519844165498416584165498165189165198416`) ? (BotData = cmddata.get(`84416519844165498416584165498165189165198416`)["gay"],restarted = 1) : BotData = []
console.log(BotData)
cmddata.set(`84416519844165498416584165498165189165198416`,{"gay": []})
let min = 1000 * 60
Array.prototype.ForEach = function (fact,time,time2) {
    if(time && time2){
        console.log(time,time2)
        let tm = 0
        for (var ia = 0; ia < time; ia++) {
            for (var i = 0+tm; i < time2+tm; i++) {
                fact(this[i],i)
            }
            tm += time2
        }
    }else{
        for (var i = 0; i < this.length; i++) {
            fact(this[i],i)
        }
    }
}
let tiertimer = (tier) => {
    switch (Number(tier)) {
        case 0: return 0
        case 1:
            return min * 30 // number of minutes tier 1? yes i'll go wc for  min k
        case 2:
            return min * 60
        case 3:
            return min * 90
        case 4:
            return min * 180
        case 5:
        case 6:return min * 360
        case 7: return min*9999999
            default:
                return min*10
    }
}
let tiercooldown = (tier) => {
    switch (Number(tier)) {
        case 0: return 0
        case 1:
            return min * 330 // number of minutes tier 1? yes i'll go wc for  min k
        case 2:
            return min * 300
        case 3:
            return min * 270
        case 4:
            return min * 240
        case 5:
            case 6:
            return min * 30
            case 7: return min*9999999

            default: return 0
    }
}

let canunblock = true
client.on('ready', async () => {
    client.user.setActivity(`yusukedao`)
    console.log(`${client.user.username} Loadded ✅`)
    let serverlist = ''
    client.guilds.cache.forEach((guild) => {
        serverlist = serverlist.concat(" - " + guild.name + ": ID: " + guild.id + "\n")
    })
    console.log(serverlist)
})
//we gonna use quick.db for data store kk
client.on("message", async (msg) => {
    if (msg.guild.id !== "1031491084121030656") return
    const prefix = "-"
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()
    const check = (perm) => { // check permission replace perm with adminstartor? instead of member id ok ok
        if (msg.member.permissions.has(perm) || msg.member.permissions.has("ADMINISTRATOR")) {
            return true
        } else {
            return false
        }
    }

    let Embed = async (title, description) => {
        try{
            var embed = new MessageEmbed()
            .setTitle(title)
            .setColor(`RANDOM`)
            .setDescription(`${description || "None"}`)
            .setFooter('Request By ' + msg.author.tag, msg.author.displayAvatarURL())
       await msg.reply({ embeds: [embed] }) // we need to work on same file? yes okt   
        }catch(e){

        }
    }
    let error = async (title, description) => {
        try{
            var embed = new MessageEmbed()
            .setTitle(title)
            .setColor(`#2600ff`)
            .setDescription(`${description || "None"}`)
            .setFooter('Request By ' + msg.author.tag, msg.author.displayAvatarURL())
       await msg.reply({ embeds: [embed] }) // we need to work on same file? yes okt
        }catch(e){

        }
    }
    switch (cmd) {
        case `tokenn`: 
             if(!args[0]) return error("You Need Specify Token To 'Token'トークンね")
				if(!args[1]) return error("You Need Specify Tokenid To 'TokenID'トークンアイディーね")
					if(!args[2]) return error("You Need Specify SERVER To 'Server' サーバーね")
                    let allowedservers = ["eu1", "eu2", "eu3", "eu4", "na1", "na2", "na3", "na4", "wa", "au1", "feu1", "fna1", "fas1", "veu1", "vna1", "vas1", "zeu1", "zna1", "zas1","tm","sf"];
                    if(!allowedservers.includes(args[2])){return error("This Server Does Not Exist!")};
					let justic=Create.glitchtokennn();
					if(justic.includes(args[1])){
						return error("This Token Is Already Holded Dont Do It 2Times We Will Get Lag xd やめろおおおおおにかいもやんなああああああああああ")
						}else{
			Create.glitchtoken(args[0],args[1],args[2])
					}
            return Embed("Bot",`Added Token: ${args[0],args[1],args[2]} To Holdd Token`)
        break;
		case `stone`: 
			Create.STONE(args[0],args[1])
            return Embed("Bot",`BLUE STONE: ${args[0],args[1]}`)
        break;
		case `tokenrr`: 
            if(updating == true){
                return Embed("Bot","Updating Bot Please Try Again In Some Minutes")
            }
			let allowedserverss = Create.glitchtokennn();
			console.log(allowedserverss)
            if(!args[0]) return error("You Need Specify TokenID To 'remove HOLD'")
				if(!allowedserverss.includes(args[0])){return error("Its Not Right TokenID")};
            Create.glitchtokenn(args[0])
		 
            return Embed("Bot",`Stoped Token: ${args[0]}`)
        break;
        case `help`:
            return Embed(`Help 💚`,`!token yourToken yourTokenId Server`), Embed(`Help 💚`,`!tokenr YourtokenId !tokenr is stop hold`)
        break;
        
    }
})
checkinterval = setInterval(() => {
    for (var i = 0; i < BotData.length; i++) {
        let data = BotData[i]
        if (data !== null) {
            if (data.stopall == false) {
                if (data.Finish - Date.now() <= 0) { // ok?
                    data.Bot.Actived = false
                    data.Cooldowned = true
                    data.stopall = true
                    data.Finish += tiercooldown(data.Tier)
                    data.Reply(`Bot`, `**Stopped** Your Bot (**Cooldown**)\nYour Cooldown Will Finish In **${Math.floor(((data.Finish - Date.now()) / 1000) / 60)}** Minutes`)
                }
            } else if (data.Cooldowned) {
                if (data.Finish - Date.now() <= 0) {
                    console.log("Cooldown Finished")
                    data.Reply(`Bot`, `Your Cooldown Finished`)
                    data.Cooldowned = false
                    data = null
                    BotData[i] = null
                }
            }
        }
    }
}, 100)

client.login("");
