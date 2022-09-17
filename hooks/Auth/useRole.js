import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { constants } from "values";

const useRole = (acc) => {
	let [{ canAccess, isInit }, setCanAccess] = useState({ isInit: false, canAccess: false });

	useEffect(() => {
		if (acc) {
			const uesrType = JSON.parse(Cookies.get(constants.INFO));
			uesrType.map((type) => {
				acc.map((acc) => {
					const hasAccess = type.pivot.user_type_id === acc;
					if (hasAccess) {
						setCanAccess({ isInit: true, canAccess: true });
					}
				});
			});
		}
	}, [acc]);
	const getAccessMethod = (acc) => {
		const uesrType = JSON.parse(Cookies.get(constants.INFO));
		return uesrType.some((type) => {
			return acc.some((acc) => {
				return type.pivot.user_type_id === acc;
			});
		});
	};

	return { canAccess, isInit, getAccessMethod };
};

export default useRole;
