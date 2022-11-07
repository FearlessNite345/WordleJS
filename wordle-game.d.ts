import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";

declare const GameStates: {
    Won: string;
    Lost: string;
    Timed_out: string;
    QuitEarly: string;
    Playing: string;
};

type WordleOptions = {
    timeout: number,
    guessPrefix: string,
    quitMsg: string,
    debugMode: boolean
}
declare class WordleGame {
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     * @param {WordleOptions} options
     */
    constructor(interaction: ChatInputCommandInteraction, options?: WordleOptions);
    createHelpEmbed(): EmbedBuilder;
    StartGame(): Promise<{
        Status: string;
        GuessesTaken: number;
    }>;
}
