import React, { ReactNode, useState } from 'react';
import { AgentProfile } from '../models/AgentProfileModel.ts';
import { Ability } from '../models/Ability.ts';
import "../css/AgentViewProfile.scss"

interface Props {
    profile: AgentProfile
}

export default function App(props: Props): React.JSX.Element {
    const [abilities, setAbilities] = useState(props.profile.abilities);

    function renderAbilities(abilities: Ability[]): React.JSX.Element {
        return (
            <div>
                {[...abilities].map((ability) => {
                    return (
                        <div className="agent-ability-container">
                            <div className="ability-item">{ability.name}</div>
                            <div className="ability-item">{ability.cost}</div>
                            <br/>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className='agent-profile-container'>
            <div className="agent-name">{props.profile.name}</div>
            { renderAbilities(abilities) }
        </div>
    );
}


