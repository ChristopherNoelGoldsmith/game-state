import Health from "./counters/Health"
import HealthBar from "./counters/HealthBar";
import CharacterName from "./counters/CharacterName";
import { Fragment } from "react";

const CharacterStatus = props => {
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