import styles from './HealthBar.module.scss';

const HealthBar = props => {

    const healthBar = 'health-bar';

    return(
        <div className={`${styles[healthBar]}`}>
            <span></span>
        </div>
    )
}

export default HealthBar;