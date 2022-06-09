import Value from "./incrimentors/Value";
import styles from './Health.module.scss';

const Health = props => {
    return <div className={`${styles['health']}`}><Value/></div>
};

export default Health;