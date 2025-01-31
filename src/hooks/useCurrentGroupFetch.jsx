import { useEffect } from "react";

import { getGroup } from "../services/groupUserCRUD";

const useCurrentGroupFetch = (setCurrentGroup, groupId) => {
	useEffect(() => {
		const fetchCurrentGroup = async () => {
			try {
				const result = await getGroup(groupId);
				if (result.success) {
					setCurrentGroup(result.data);
				} else {
					console.error(result.message);
				}
			} catch (error) {
				console.error("Error fetching Current Group:", error);
			}
		};
		fetchCurrentGroup();
	}, [groupId]);
};

export default useCurrentGroupFetch;