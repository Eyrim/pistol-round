interface AgentProfileInterface {
    name: string,
    abilities: Map<string, number>;
}

class AgentProfile implements AgentProfileInterface {
    name: string;
    abilities: Map<string, number>;

    constructor(name: string, abilities: Map<string, number>) {
        this.name = name;
        this.abilities = abilities;
    }
}

export class Agents {
    //TODO: DUMMY VALUES \/\/\/ Replace with real
    private static agents: AgentProfile[] = [
        new AgentProfile("cypher", new Map([
            ["trip", 100],
            ["cage", 200],
            ["camera", 0]
        ])),
        new AgentProfile("jett", new Map([
            ["smoke", 200],
            ["updraft", 150],
            ["dash", 0]
        ]))
    ];


    public static tryGetAgentByName(name: string) {
        name = name.toLocaleLowerCase();

        return this.agents.forEach((agent) => {
            if (agent.name == name) { return agent; }
        });
    }
}