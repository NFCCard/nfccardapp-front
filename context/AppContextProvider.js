import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";
import { constants } from "values";
export const AppContext = createContext();

function AppContextProvider({ children }) {
	const [storage, setStorage] = useState(() => {
		let defaultData = {};
		const cookie = Cookies.get(constants.STORAGE);

		if (cookie) {
			defaultData = JSON.parse(cookie);
		}
		return defaultData;
	});

	useEffect(() => {
		Cookies.set(constants.STORAGE, JSON.stringify(storage));
	}, [storage]);

	return <AppContext.Provider value={{ storage, setStorage }}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
