import styles from './ActivePlayer.module.scss';
import AttackZone from './counters/AttackZone';
import Damage from './counters/Damage';
import Control from './counters/Control';
import Health from './counters/Health';
import CharacterName from './counters/CharacterName';

const ActivePlayer = props => {
    return(
        <section className={`${styles['active-player']}`} id="activePlayer">
                <div><CharacterName/></div>
                <div className={`${styles['attack-stats']}`}>
                    <AttackZone/>
                    <Damage/>
                </div>
                <div className={`${styles['health-control']}`}>
                    <Health/>
                    <Control/>
                </div>
        </section>
    );
};

export default ActivePlayer;