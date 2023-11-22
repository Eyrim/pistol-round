import React, { ReactNode } from 'react';
import '../css/App.scss';
import { Agents } from '../models/Agents.ts';
import AgentProfileView from './AgentProfileView.tsx';

export default function App(): React.JSX.Element {
    return (
        <div className="App">
            {Agents.getAllAgents().map((val, index): ReactNode => {
                return (
                    <AgentProfileView profile={val} />
                );
            })}
        </div>
    );
}