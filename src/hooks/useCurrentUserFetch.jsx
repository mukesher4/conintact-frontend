import { useEffect } from "react";

import { getCurrentUser } from "../services/userCRUD";

const useCurrentUserFetch = (setCurrentUser) => {
	useEffect(() => {
		const fetchCurrentUser = async () => {
			try {
				const result = await getCurrentUser();
				if (result.success) {
					setCurrentUser(result.data);
				} else {
					console.error(result.message);
				}
			} catch (error) {
				console.error("Error fetching user:", error);
			}
		};
		fetchCurrentUser();
	}, []);
};

export default useCurrentUserFetch;