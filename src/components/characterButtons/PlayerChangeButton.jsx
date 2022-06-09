import Button from '..//UI/Button';
import { useSelector, useDispatch } from 'react-redux';

const PlayerChangeButtons = props => {
    const players = useSelector(store=> store.player);
    
    return <section id="player-change-button"><Button/></section>
}

export default PlayerChangeButtons;