import { useEffect } from "react";

import { getGroups } from "../services/groupUserCRUD";

import { getContacts } from "../services/contactCRUD";

const useContactFetch = async (setContact) => {
	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const result = await getContacts();
				if (result.success) {
					setContact(result.data);
				} else {
					console.error(result.message);
				}
			} catch (error) {
				console.error("Error fetching contact:", error);
			}
		};
		fetchContacts();
	}, []);
};

export default useContactFetch;