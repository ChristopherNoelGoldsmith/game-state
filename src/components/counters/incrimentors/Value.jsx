import styles from './Value.module.scss';
import { useState } from "react";
import IncrimentButton from "../../UI/IncrimentButton";

const Value = () => {
    
    const [valueState, setValue] = useState(0);

    const decriment = 'dec';
    const incriment = 'inc';

    const incrimentValue = (type) => {
        if(type === 'inc') return setValue(control => ++control);
        if(type === 'dec') return setValue(control => --control);
        return console.log('ERROR IN Value.jsx');
    }

    return (
        <section className={`${styles['value']}`}>
            <IncrimentButton className={`${styles[`left`]}`} onClick={()=> incrimentValue(decriment)} type={decriment}/>
                <p>{valueState}</p>
            <IncrimentButton className={`${styles[`right`]}`} onClick={()=> incrimentValue(incriment)} type={incriment}/>
        </section>
    );
};

export default Value;