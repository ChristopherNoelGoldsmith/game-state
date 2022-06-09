import styles from './AttackZone.module.scss';
import { useReducer } from "react";
import Speed from "./Speed";

const zoneReducer = (state, action) => {
    console.log(state, action)
    state.low = '';
    state.high = '';
    state.mid = ''

    if(action === 'low') state.low = 'vis';
    if(action === 'mid') state.mid = 'vis';
    if(action === 'high') state.high = 'vis';

    return {
        low: state.low,
        mid: state.mid,
        high: state.high
    };

};

const AttackZone = () => {

    const [zoneState, dispatchZone] = useReducer(zoneReducer, {});

    const zoneHandler = event => {
        return dispatchZone(event.target.id);
    }

    //hav e buttons have no display by default
    return (
        <section id="speed-zones" className={`${styles[`speed-zones`]}`}>
            <div className={`${styles[`zone-arrow`]} ${styles[`mid`]}`}>
                <div className={`${styles['arrow-shaft']}`}>
                    <div className={`${styles[`arrow-point`]}`}></div>
                </div>
            </div>
            <figure className="speed">
                <Speed/>
            </figure>        
            <div className={`${styles[`zone-btns`]}`}>
                <button onClick={zoneHandler} id='high' className={`high ${zoneState.high}`}>High</button>
                <button onClick={zoneHandler} id='mid' className={`mid ${zoneState.mid}`}>Mid</button>
                <button onClick={zoneHandler} id='low' className={`low ${zoneState.low}`}>Low</button>
            </div>
        </section>
    )
};

export default AttackZone;