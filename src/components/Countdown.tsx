import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    const context = useContext(CountdownContext);
    
    const [minuteLeft, minuteRight] = String(context.minutes).padStart(2, '0').split(''); //padStart(2, '0') preenche com 0 o restante à esquerda
    const [secondLeft, secondRight] = String(context.seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={ styles.countdownContainer }>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </div>

            { context.hasFinished ? (
                <button 
                    disabled
                    type="button" 
                    className={styles.countdownButton}
                >
                Ciclo encerrado
                </button>
            ) : (
                <>
                    { context.isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={context.resetCountdown}
                        >
                            Encerrar ciclo
                        </button>
        
                    ) : (
                        <button 
                            type="button" 
                            className={ styles.countdownButton }
                            onClick={context.startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}

        </div>
    );
}