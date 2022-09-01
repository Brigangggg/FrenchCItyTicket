const Utils = require("../../modules/utils.js");
const Embed = Utils.Embed;
const { config, embeds, lang } = Utils.variables;

module.exports = {
    name: "bugreport",
    run: async (bot, messageOrInteraction, args, { prefixUsed, commandUsed, type, member, guild, reply, channel: ch }) => {
        return new Promise(async resolve => {
            if (config.BugReports.Type.toLowerCase() == 'both' && [ch.name, ch.id].includes(config.BugReports.Channels.Pending)) {
                if (type == "interaction") reply(Embed({
                    preset: "error",
                    description: lang.MinecraftModule.Commands.Bugreports.InvalidChannel
                }), { ephemeral: true });

                return resolve();
            }

            let channel = Utils.findChannel(config.BugReports.Channels.Pending, guild);

            if (!channel) {
                reply(Embed({ preset: 'console' }));

                return resolve();
            }
            if (!args.length) {
                reply(Embed({ 
                    preset: 'invalidargs', 
                    usage: module.exports.usage
                }, { prefixUsed }), { ephemeral: true });

                return resolve();
            }

            let imageLogs = Utils.findChannel(config.Channels.ImageLogs, guild, 'GUILD_TEXT');
            let attachment = type == "message" ? messageOrInteraction.attachments.first() : null;

            if (attachment) await imageLogs.send({ files: [attachment] })
                .then(async msg => {
                    attachment = msg.attachments.first();
                });

            require("../../modules/methods/createBugreport")(type == "message" ? messageOrInteraction.content.replace(prefixUsed + commandUsed, "").trim() : args.join(" ").trim(), member, attachment)
                .then(() => {
                    reply(Utils.setupMessage({
                        configPath: embeds.Embeds.BugReported
                    }));

                    return resolve(true);
                })
                .catch(() => {
                    reply(Embed({ preset: "console" }), { ephemeral: true });

                    return resolve();
                });
        });
    },
    description: "Signaler un bug sur le serveur",
    usage: "bugreport <bug>",
    aliases: [
        "bug"
    ],
    arguments: [
        {
            name: "bug",
            description: "Le bogue que vous voulez signaler",
            required: true,
            type: "STRING"
        }
    ]
};
