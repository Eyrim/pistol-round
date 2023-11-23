import { Ability } from "./Ability.ts";
import { AgentProfile } from "./AgentProfileModel.ts";

export class Agents {
    //TODO: DUMMY VALUES \/\/\/ Replace with real
    private static agents: AgentProfile[] = [
        new AgentProfile("Cypher", [
            new Ability("trip", 100),
            new Ability("cage", 200),
            new Ability("camera", 0)
        ],
        "Cypher_icon.webp"),
        new AgentProfile("Jett", [
            new Ability("smoke", 200),
            new Ability("updraft", 150),
            new Ability("dash", 0)
        ],
        "Jett_icon.webp")
    ];


    public static getAllAgents() {
        return this.agents;
    }

    public static tryGetAgentByName(name: string) {
        name = name.toLocaleLowerCase();

        return this.agents.forEach((agent) => {
            if (agent.name === name) { return agent; }
        });
    }
}