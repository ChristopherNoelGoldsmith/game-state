import { useState } from "react";

const useIncriment = (initialValue) => {
	const [valueState, setValue] = useState(initialValue);

	const incrimentValue = () => {
		return setValue((control) => ++control);
	};

	const decrimentValue = () => {
		return setValue((control) => --control);
	};
	return [valueState, incrimentValue, decrimentValue];
};

export default useIncriment;
