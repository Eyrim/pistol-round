import { Ability } from "./Ability";

export class AgentProfile {
    name: string;
    abilities: Ability[];
    iconURL: string

    constructor(name: string, abilities: Ability[], iconURL: string) {
        this.name = name;
        this.abilities = abilities;
        this.iconURL = iconURL;
    }
}