import { Ability } from "./Ability.ts";
import { AgentProfile } from "./AgentProfileModel.ts";

export class Agents {
    //TODO: DUMMY VALUES \/\/\/ Replace with real
    // private static agents: AgentProfile[] = [
    //     new AgentProfile("cypher", new Map([
    //         ["trip", 100],
    //         ["cage", 200],
    //         ["camera", 0]
    //     ])),
    //     new AgentProfile("jett", new Map([
    //         ["smoke", 200],
    //         ["updraft", 150],
    //         ["dash", 0]
    //     ]))
    // ];
    private static agents: AgentProfile[] = [
        new AgentProfile("cypher", [
            new Ability("trip", 100),
            new Ability("cage", 200),
            new Ability("camera", 0)
        ]),
        new AgentProfile("jett", [
            new Ability("smoke", 200),
            new Ability("updraft", 150),
            new Ability("dash", 0)
        ])
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