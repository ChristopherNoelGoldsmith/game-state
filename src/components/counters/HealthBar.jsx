import styles from './HealthBar.module.scss';
import usePlayerStats from '../hooks/usePlayerStats';

const healthBarStyles = (healthPercentage) => {
    if (healthPercentage > 50) {
        return {
            height: `${healthPercentage}%`,
            background: 'green',
            animation: 'none'
        }
    }
    if (healthPercentage > 15) {
        return {
            height: `${healthPercentage}%`,
            background: 'orange',
            animation: 'none'
        }
    }
    if (healthPercentage > 0) {
        return {
            height: `${healthPercentage}%`,
        }
    }
};
const HealthBar = props => {

    const [players] = usePlayerStats();

    const health = (player) => {
        const maxHealthPercentage = Math.floor(players[player].health / players[player].maxHealth * 100);
        return healthBarStyles(maxHealthPercentage);        
    }
    console.log(players, health('player1'));
    return(
        <div className={`${styles['health-bar']}`}>
            <span style={health('player1')}></span>
        </div>
    )
}

export default HealthBar;