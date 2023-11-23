import React, { useState } from 'react';
import { AgentProfile } from '../models/AgentProfileModel.ts';
import { Ability } from '../models/Ability.ts';
import "../css/AgentViewProfile.css"

interface Props {
    profile: AgentProfile
}

export default function App(props: Props): React.JSX.Element {
    const [abilities] = useState(props.profile.abilities);
    const [selectedAbilities, setSelectedAbilities] = useState<Ability[]>([]);

    function renderAbilities(abilities: Ability[]): React.JSX.Element {
        return (
            <div className="agent-ability-container-container">
                {
                    <table>
                        <thead>
                            <tr>
                                <th className="ability-table-header">Ability Name</th>
                                <th className="ability-table-header">Ability Cost</th>
                            </tr>
                        </thead>
                        {abilities.map((ability) => {
                            return (
                                <tr onClick={abilityOnClick}>
                                    <td className="ability-table-data">{ability.name}</td>
                                    <td className="ability-table-data">{ability.cost}</td>
                                </tr>
                            );
                        })}
                    </table>
                }
            </div>
        );
    }

    function abilityOnClick(event): void {
        let element: HTMLTableRowElement = event.currentTarget;
    }

    return (
        <div className="agent-profile-container">
            <div className="agent-img-container">
                <img src={props.profile.iconURL} alt={props.profile.name + "'s icon"} />
            </div>
            <div className="agent-name">{props.profile.name}</div>
            { renderAbilities(abilities) }
        </div>
    );
}


