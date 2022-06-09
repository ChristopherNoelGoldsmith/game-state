import Value from "./incrimentors/Value";
import styles from "./Speed.module.scss";


const Speed = () => {
    return (
        <div className={`${styles['speed']}`}>
            <Value/>
        </div>
    
    )
};

export default Speed;