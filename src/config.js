import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "/",
  TOKEN: "MTAxNDc1OTMxMzQyNTgzODExNQ.GnOHFa.REYcUM4fkeVlw5MZA68MD7GxOE0_9ZezrEKkE0",
  ACTIVITY: { NAME: "000", TYPE: "PLAYING" },
  GUILD_ID: "1010022909621846087",
  TICKET: {
    CHANNEL: "1013610651387711528",
    CATEGORY: "1011375391530827797",
    ARCHIVE_CATEGORY: "1013610765955125298",
    MESSAGE: "Clique pour créer un ticket !",
    STAFF_ROLES: [],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Comfirmé",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Archive",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Fermé",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "raison",
        LABEL: "Raison",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 5,
        MAX_LENGTH: 30,
        PLACE_HOLDER: "Quel est la raison de votre ticket ?",
        REQUIRED: true,
      },
      {
        ID: "desc",
        LABEL: "Description",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 10,
        MAX_LENGTH: 100,
        PLACE_HOLDER: "Décrivez la raison de votre ticket !",
        REQUIRED: true,
      },
    ],
  },
};
