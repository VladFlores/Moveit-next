import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../style/components/CompletedChallenges.module.css';


export function CompletedChallenges() {
    const { challengeCompleted } = useContext(ChallengesContext);

    return (
        <div className={style.completeChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>
    );
}