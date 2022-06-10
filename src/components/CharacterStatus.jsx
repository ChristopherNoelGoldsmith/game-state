import Health from "./counters/Health"
import HealthBar from "./counters/HealthBar";
import CharacterName from "./counters/CharacterName";
import { Fragment } from "react";
import usePlayerStats from "./hooks/usePlayerStats";
import { useEffect } from "react";
import { playerActions } from "../store/players";

const CharacterStatus = props => {

    const [players, dispatchPlayers] = usePlayerStats();

    useEffect(()=> {
        dispatchPlayers(playerActions.setPlayersHealth({player1: {health: 28, maxHealth: 28}, player2: {health: 19, maxHealth: 19}}))
    }, [dispatchPlayers])

    return (
    <Fragment>
        <CharacterName/>
    <section id="health-bar">
        <HealthBar/>
        <Health/>
    </section>
    </Fragment>
    )
}

export default CharacterStatus;