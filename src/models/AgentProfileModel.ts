import { Ability } from "./Ability";

export class AgentProfile {
    name: string;
    abilities: Ability[];

    constructor(name: string, abilities: Ability[]) {
        this.name = name;
        this.abilities = abilities;
    }
}