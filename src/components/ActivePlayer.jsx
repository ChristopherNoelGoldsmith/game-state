import styles from './ActivePlayer.module.scss';
import AttackZone from './counters/AttackZone';
import Damage from './counters/Damage';
import Control from './counters/Control';
import Health from './counters/Health';
import CharacterName from './counters/CharacterName';
import CharacterStatus from './CharacterStatus';
import Block from './counters/Block';
import HitBlockButtons from './characterButtons/HitBlockButtons';
import { Fragment } from 'react';

const ActivePlayer = props => {
    return(
        <Fragment>
        <section className={`${styles['active-player']}`} id="activePlayer">
                <div><CharacterStatus/></div>
                <div className={`${styles['attack-stats']}`}>
                    <AttackZone/>
                </div>
                <div className={`${styles['attack-stats']} ${styles['damage']}`}>
                <Damage/>
                </div>
        </section>
        <div className={`${styles['control-buttons']}`}>
            <HitBlockButtons/>
        </div>
        </Fragment>
    );
};

export default ActivePlayer;