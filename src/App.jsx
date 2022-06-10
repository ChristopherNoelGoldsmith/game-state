import ActivePlayer from "./components/ActivePlayer";
import SelectScreen from "./components/selectScreen/SelectScreen";
import styles from "./App.module.scss";
import { useState } from "react";

//

function App() {
	const [select, setSelect] = useState(false);

	const selectScreenHandler = () => {
		return setSelect((select) => !select);
	};

	return (
		<div className={styles.container}>
			{!select && <SelectScreen start={selectScreenHandler} />}
			{select && <ActivePlayer />}
		</div>
	);
}

export default App;
