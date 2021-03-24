import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../style/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>

            </div>

            {hasFinished ? (

                <button
                    disabled
                    className={style.countdownButton}
                >
                    Ciclo encerrado
                    <img src="/icons/CheckMark.svg" alt="Concluido" />
                </button>

            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"

                            className={`${style.countdownButton} ${style.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar Ciclo
                            <img src="/icons/close.svg" alt="Abandonar" />

                        </button>

                    ) : (
                        <button
                            type="button"
                            className={style.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar Ciclo
                        </button>
                    )}
                </>

            )
            }




        </div >
    );
}