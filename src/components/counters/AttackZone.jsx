import styles from './AttackZone.module.scss';
import { useState } from "react";
import Speed from "./Speed";

const AttackZone = () => {

    const [zoneState, setZone] = useState('mid');

    const zoneHandler = event => {
        return setZone(event.target.id);
    }

    //hav e buttons have no display by default
    return (
        <section id="speed-zones" className={`${styles[`speed-zones`]}`}>
            <section><div className={`${styles[`zone-arrow`]} ${styles[`${zoneState}`]}`}>
                <div className={`${styles['arrow-shaft']}`}>
                    <div className={`${styles[`arrow-point`]}`}></div>
                </div>
            </div>
            <figure className="speed">
                <Speed/>
            </figure>
            </section>        
            <div className={`${styles[`zone-btns`]}`}>
                <button onClick={zoneHandler} id='high'>High</button>
                <button onClick={zoneHandler} id='mid'>Mid</button>
                <button onClick={zoneHandler} id='low'>Low</button>
            </div>
        </section>
    )
};

export default AttackZone;