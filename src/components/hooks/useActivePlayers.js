import { useSelector } from "react-redux";

const useActivePlayers = () => {
	const players = useSelector((store) => store.player);
	const activePlayer = players.player1.active ? "player1" : "player2";
	const inactivePlayer = players.player2.active ? "player1" : "player2";
	const playerState = { activePlayer, inactivePlayer };

	return playerState;
};

export default useActivePlayers;
