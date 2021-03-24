import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../style/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={style.profileContainer}>
            <img src="https://instagram.fcgh5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/134767429_455680485430435_7324566163197072650_n.jpg?_nc_ht=instagram.fcgh5-1.fna.fbcdn.net&_nc_ohc=an1iQBrocVIAX8RP7Iq&tp=1&oh=1f08462363dc20e2388e82f890cf71a9&oe=605F4061" alt="Vladimir Flores" />

            <div>
                <strong>Vladimir Flores</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>

            </div>
        </div>
    );
}