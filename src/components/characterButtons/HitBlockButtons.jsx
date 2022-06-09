import Button from '../UI/Button';
import styles from './HitBlockButtons.module.scss';
//import usePlayerStats from '../hooks/usePlayerStats';

const HitBlockButtons = () => {

    //const [player] = usePlayerStats();

    //console.log(player);


    //fix buttons
    return (
    <section id="hit-block-buttons" className={`${styles['hit-block-buttons']}`}>
        <Button><p>BLOCK</p></Button>
        <Button><p>HALF-BLOCK</p></Button>
        <Button><p>HIT</p></Button>
        </section>);
}

export default HitBlockButtons;