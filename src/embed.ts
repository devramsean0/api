import { MessageEmbed } from 'discord.js';
function EmbedTemplate(settings: any, command: string, description: string, footer: string) {
	const embed = new MessageEmbed()
		.setColor('#ff6600')
		.setTitle(`${settings.botname} | ${command}`)
		.setDescription(`${description}`)
		.setFooter({ text: `${footer}` });
	return embed;
}
export function OneFieldEmbedTemplate(settings: any, command: string, description: string, footer: string, field1data: any) {
    const embed = EmbedTemplate(settings, command, description, footer)
    .addFields(field1data);
    return embed
}
export function TwoFieldEmbedTemplate(settings: any, command: string, description: string, footer: string, field1data: any, field2data: any) {
    const embed = EmbedTemplate(settings, command, description, footer)
    .addFields(field1data, field2data);
    return embed
}
export function ThreeFieldEmbedTemplate(settings: any, command: string, description: string, footer: string, field1data: any, field2data: any, field3data: any) {
    const embed = EmbedTemplate(settings, command, description, footer)
    .addFields(field1data, field2data, field3data);
    return embed
}
export function FourFieldEmbedTemplate(settings: any, command: string, description: string, footer: string, field1data: any, field2data: any, field3data: any, field4data: any) {
    const embed = EmbedTemplate(settings, command, description, footer)
    .addFields(field1data, field2data, field3data, field4data);
    return embed
}
export function FiveFieldEmbedTemplate(settings: any, command: string, description: string, footer: string, field1data: any, field2data: any, field3data: any, field4data: any, field5data: any) {
    const embed = EmbedTemplate(settings, command, description, footer)
    .addFields(field1data, field2data, field3data, field4data, field5data);
    return embed
}