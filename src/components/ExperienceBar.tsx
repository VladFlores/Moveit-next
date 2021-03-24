import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import style from '../style/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextlevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextlevel;

    return (
        <header className={style.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={style.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextlevel} xp</span>
        </header>

    );
}