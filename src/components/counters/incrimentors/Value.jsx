import styles from './Value.module.scss';
import { useState } from "react";
import IncrimentButton from "../../UI/IncrimentButton";

const Value = () => {
    
    const [valueState, setValue] = useState(0);

    const decriment = 'dec';
    const incriment = 'inc';

    const incrimentValue = (type) => {
        if(type === 'inc') setValue(control => ++control);
        if(type === 'dec') setValue(control => --control);
        return console.log('ERROR IN Value.jsx');
    }

    return (
        <section className={`${styles['value']}`}>
            <IncrimentButton onClick={()=> incrimentValue(incriment)} type={incriment}/>
                <p>{valueState}</p>
            <IncrimentButton onClick={()=> incrimentValue(decriment)} type={decriment}/>
        </section>
    );
};

export default Value;