import styles from './ActivePlayer.module.scss';
import AttackZone from './counters/AttackZone';
import Damage from './counters/Damage';
import Control from './counters/Control';
import Health from './counters/Health';
import CharacterName from './counters/CharacterName';
import CharacterStatus from './CharacterStatus';

const ActivePlayer = props => {
    return(
        <section className={`${styles['active-player']}`} id="activePlayer">
                <div><CharacterStatus/></div>
                <div className={`${styles['attack-stats']}`}>
                    <AttackZone/>
                    <Damage/>
                </div>
                <div className={`${styles['deck-control']}`}>
                    <Control/>
                </div>
        </section>
    );
};

export default ActivePlayer;