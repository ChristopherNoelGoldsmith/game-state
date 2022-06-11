import ActivePlayer from "./components/ActivePlayer";
import SelectScreen from "./components/selectScreen/SelectScreen";
import styles from "./App.module.scss";
import { useState } from "react";
import { Helmet } from "react-helmet";

//

function App() {
	const [select, setSelect] = useState(false);

	const selectScreenHandler = () => {
		return setSelect((select) => !select);
	};

	return (
		<div className={styles.container}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>UVS SIMULATOR</title>
				<link
					rel="canonical"
					href="
universus-sim.netlify.app"
				/>
			</Helmet>
			{select && <SelectScreen selectScreenHandler={selectScreenHandler} />}
			<ActivePlayer selectScreenHandler={selectScreenHandler} />
		</div>
	);
}

export default App;
