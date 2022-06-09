import Value from "./incrimentors/Value";
import styles from './Block.module.scss';

const Block = props => {
    return (<div id="block" className={`${styles['block']}`}>
        <Value/>
        </div>)
}

export default Block;