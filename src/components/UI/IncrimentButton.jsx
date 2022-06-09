import styles from './IncrimentButton.module.scss';
const IncrimentButton = props => {
    
    const buttonType = (type) => {
        if(type === 'inc'){
            return '+';
        };
        if(type ==='dec'){
            return '-';
        };
        return 'ERROR';
    }

    return (
        <button className={`${styles[`btn`]}`} onClick={props.onClick}>{buttonType(props.type)}</button>
    )
};

export default IncrimentButton;