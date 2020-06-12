const discord= require("discord.js")
const bot = new discord.Client();
const prefix = "jacare ";
const geral = require('./geral.json')
const sabio = geral.sabio
bot.on("ready", () => {
    console.log('to vivo caraio aaaaaaaaa')
    bot.user.setActivity(`existindo [padero]`)
});

bot.on("message", async (msg) =>{
    if(msg.channel.type === "dm") return;
    const args = msg.content.slice(prefix.length).split(' ');
    const comando = args[0].toLowerCase()

    switch(comando){
        case 'meu':
            if(args.length < 2) return msg.channel.send(`meu chapa precisamos de algo para ser nosso`)
            const cumunismo = new discord.MessageEmbed()
            .setTitle(`nosso ${args.slice(1).join(" ")}`)
            .attachFiles('./nazistinhademerda.png')
            .setImage('attachment://nazistinhademerda.png');
            msg.channel.send(cumunismo)
        break;
        case 'sabiaspalavras':
            let randomica = Math.floor(Math.random() * sabio.length)
            msg.channel.send(`${sabio[randomica]}`)
        break;
        case 'vailuan':
            msg.channel.send(process.env.vailuan) //temos crianças aqui
        break;
        case 'salve':
            msg.channel.send(`${msg.author} manda salve :pray:`)
        break;
        case 'piririm':
            msg.channel.send(`piririm:microphone:piririm:microphone:piririm:microphone:alguém:pensive:ligou:telephone_receiver:pra mim:hugging:quem:grey_question:é:thinking:`)
        break;
        case 'ship':
            if(!args[1]) return msg.channel.send(`menciona alguem pra shipar caraio`) 
            if(!args[2]) return msg.channel.send(`menciona alguem pra ser shipado caraio`)
            const randship = Math.floor(Math.random() * ship.length)
            const shipp = new discord.MessageEmbed()
            .setTitle(`as chances do casal ${args[1]} com ${args[2]} éééééééé`)
            .setDescription(`${ship[randship]}`);
            msg.channel.send(shipp)
        break;
        case 'kiss':
            if(!args[1]) return msg.channel.send(`fala algo/alguem pra vc beijar kct`)
            const bejo = new discord.MessageEmbed()
            .setTitle(`${msg.author.tag} beijou ${args[1]}`)
            .attachFiles(`./bjo.gif`)
            .setImage('attachment://bjo.gif')
            msg.channel.send(bejo)
        break;
        case 'ban':
            let autorban = msg.author.tag;
            let banserver = msg.guild;
            if(!msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.reply(` vc não tem perm para isso`);
            if(!msg.guild.me.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.reply(` eu n tenho perm pra isso`);
            const alvo = msg.mentions.members.first();
            if(!alvo || !alvo.id) return msg.reply(`${msg.author} pfvr especifique alguem pra banir`);
            if(alvo.id === msg.author.id) return msg.reply(` vc não pode se banir :burro:`);
            if(alvo.id === bot.user.id) return msg.reply(` cusagem ;-;`);
            if(!args[2]) return msg.reply(` da um motivo pro ban pls`);
            let banembed = new discord.MessageEmbed()
            .setTitle("Ser umano :banido:", 'https://cdn.discordapp.com/emojis/587031845120507923.png?v=1')
            .setDescription(`Ser umano chamado ${alvo} ${alvo.id} :banido: Motivo: ${args.slice(2).join(" ")}`)
            .setColor('#ff0000')
            .setThumbnail(alvo.avatarURL)
            .setFooter(`Banido por ${autorban}`)
            msg.channel.send(banembed);
            alvo.send(`Vose foi :banidor: de ${banserver} pelo ${autorban} \nMotivo: ${args.slice(2).join(" ")}`);
            alvo.ban(args[2]);
        break;
        case 'unban':
            const unbanserver = msg.guild;
            if(!msg.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.reply(`${msg.author} vc não tem perm para isso`);
            if(!msg.guild.me.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) return msg.reply(` eu n tenho perm pra isso`)
            const alvoo = await bot.users.fetch(args[1]);
            let autorunban = msg.author.tag;
            if(!alvoo) return msg.reply(` pfvr fale alguen pra ser :desbanido:`);
            let unban = new discord.MessageEmbed()
            .setTitle("Ser umano :desbanido:")
            .setDescription(`Ser umano chamado ${alvoo} ${alvoo.id} foi :desbanido:`)
            .setColor('#00cc69')
            .setThumbnail(alvoo.avatarURL)
            .setFooter(`Desbanido por ${autorunban}`)
            alvoo.send(`Vose foi desbanido de ${unbanserver} pelo ${autorunban}`)
            msg.channel.send(unban);
            msg.guild.members.unban(alvoo);
        break;
        case 'kick':
            const kickserver = msg.guild;
            const alvooo = msg.mentions.members.first();
            let autorkick = msg.author.tag;
            if(!msg.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR")) return msg.reply(`${msg.author} vc não tem perm para isso`);
            if(!msg.guild.me.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR")) return msg.reply(` eu n tenho perm pra isso`);
            if(!alvooo || !alvooo.id) return msg.reply(` pfvr especifique alguem pra ser kickado`);
            if(!args[2]) return msg.reply(` pfvr de um motivo pro kick`);
            let kick = new discord.MessageEmbed()
            .setTitle("Ser umano :kickado:")
            .setDescription(`Ser umano chamado ${alvooo} ${alvooo.id} foi kickado \nMotivo: ${args.slice(2).join(" ")}`)
            .setColor('#ff0000')
            .setThumbnail(alvooo.avatarURL)
            .setFooter(`Kickado por ${autorkick}`)
            msg.channel.send(kick)
            alvooo.send(`Vose foi kickado do servidor ${kickserver} pelo ${autorkick}\nMotivo: ${args.slice(2).join(" ")}`)
            alvooo.kick(args.slice(2).join(" "))
        break;
        case 'createtext':
            if(!msg.member.hasPermission('MANAGE_CHANNELS' || 'ADMINISTRATOR')) return msg.channel.send(`${msg.author} vc n pode fazer isso`)
            if(!msg.guild.me.hasPermission('MANAGE_CHANNELS' || 'ADMINISTRATOR')) return msg.channel.send(`${msg.author} eu n posso fazer isso`)
            if(!args[1]) return msg.channel.send(`${msg.author} especifique um nome caraio`)
            if(args[1].length > 32) return msg.channel.send(`${msg.author} nome muito longo (pfvr nome menor ou igual a 32 caracteres)`)
            msg.guild.channels.create(`${args[1]}`, {type:'text'})
            msg.channel.send(`Canal de texto com nome ${args[1]} criado com sucesso`)
        break;
        case 'createvoice':
            if(!msg.member.hasPermission('MANAGE_CHANNELS' || 'ADMINISTRATOR')) return msg.channel.send(`${msg.author} vc n pode fazer isso`)
            if(!msg.guild.me.hasPermission('MANAGE_CHANNELS' || 'ADMINISTRATOR')) return msg.channel.send(`${msg.author} eu n posso fazer isso`)
            if(!args[1]) return msg.channel.send(`${msg.author} especifique um nome caraio`)
            if(args[1].length > 32) return msg.channel.send(`${msg.author} nome muito longo (pfvr nome menor ou igual a 32 caracteres)`)
            msg.guild.channels.create(`${args[1]}`, {type:'voice'})
            msg.channel.send(`Canal de voz com nome ${args[1]} criado com sucesso`)
        break;
        case 'help':
            const helpp = new discord.MessageEmbed()
            .setTitle(`ajuda`)
            .setDescription(`prefixo: jacare (com espaço no final tipo jacare help)\njacare say <coisa> - fala algo\njacare ship <coisarandom1> <coisarandom2> - shippa duas coisas ou pessoas\n jacare kiss <pessoa> - beija alguem\njacare meu <qualquercoisa> - nossa coisa (comunismo intensifies)\njacare sabiaspalavras - aummmmmmm :person_in_lotus_position: ${sabio.length} sabias palavras unicas\njacare salve - salve mermão\n jacare vailuan - vai luan\njacare piririm - o classico piririm\njacare ban <retardado> motivo - (acho q n ta funfando, melhor n usar, apenas para usuarios q podem banir ou com perm de administrador)\njacare kick <retardado> <motivo> (mesma coisa do de cima, apenas para q podem kickar/perm de administrador)\njacare unban <pessoa> <motivo> (tbm o de cima)\n\nMe adicione! https://discord.com/api/oauth2/authorize?client_id=718602386251448402&permissions=52246&scope=bot\nMinha pg do github: https://github.com/defoko-bot/jacare2.0/ \n -padero (paradino#3151)`)
            msg.channel.send(helpp)
        break;
        case 'say':
            if(args.length < 2) return msg.channel.send(`nada pra falar?`)
            if(msg.deletable) msg.delete();
            msg.channel.send(args.slice(1).join(" "))
        break;
     }
});
 
bot.login(process.env.TOKEN);

//aleluia terminei eu acho
//-padero
