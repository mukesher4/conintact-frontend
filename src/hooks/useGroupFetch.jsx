import { useEffect } from "react";

import { getGroups } from "../services/groupUserCRUD";

export const useGroupFetch = (setGroups) => {
	useEffect(() => {
		const fetchGroups = async () => {
			try {
				const result = await getGroups();
				if (result.success) {
					setGroups(result.data);
				} else {
					console.error(result.message);
				}
			} catch (error) {
				console.error("Error fetching groups:", error);
			}
		};
		fetchGroups();
  	}, []);
};

export default useGroupFetch;