export const DocsCommand: Command = {
  name: "docs1",
  description: "Acesse a documentação da tecnologia que quiser1",
  run: async (interaction) => {
    const content = "Hello there!";

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

export default DocsCommand;

// import {
//   SlashCommandBuilder,
//   ActionRowBuilder,
//   StringSelectMenuBuilder,
//   Component,
// } from "discord.js";
// const row = new ActionRowBuilder().addComponents(
//   new StringSelectMenuBuilder()
//     .setCustomId("select")
//     .setPlaceholder("Nenhuma linguagem selecionada")
//     .addOptions(
//       {
//         label: "javascript",
//         description: "Veja a documentação de Javascript",
//         value: "javascript",
//       },
//       {
//         label: "python",
//         description: "Veja a documentação de Python",
//         value: "python",
//       },
//       {
//         label: "C#",
//         description: "Veja a documentação de C#",
//         value: "csharp",
//       },
//       {
//         label: "discord.js",
//         description: "Veja a documentação de Discord.js",
//         value: "discordjs",
//       }
//     )
// );

// export default {
//   data: new SlashCommandBuilder()
//     .setName("docs")
//     .setDescription("Acesse a documentação da tecnologia que quiser"),

//   async execute(interaction: any) {
//     await interaction.reply({
//       content: "Selecione uma das techs abaixo:",
//       components: [row],
//     });
//   },
// };
