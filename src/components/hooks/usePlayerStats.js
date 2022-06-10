import { useSelector, useDispatch } from 'react-redux';

const usePlayerStats = () => {
    const player = useSelector(store => store.player);
    
    const dispatch = useDispatch();

    return [player, dispatch];
}

export default usePlayerStats;
