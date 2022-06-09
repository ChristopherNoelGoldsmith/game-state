import { useSelector, useDispatch } from 'react-redux';
//import { playerActions } from '../../store/players';

const usePlayerStats = () => {
    const player = useSelector(store => store.player);
    return [player];
}

export default usePlayerStats;
