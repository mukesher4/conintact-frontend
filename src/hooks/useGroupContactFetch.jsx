import { useEffect } from "react";

import { getContactsInGroup } from '../services/groupContactCRUD';

const useGroupContactFetch = (setGroupContact, groupId) => {
	useEffect(() => {
		const fetchGroupContacts = async () => {
			try {
				const result = await getContactsInGroup(groupId);
				if (result.success) {
					setGroupContact(result.data.contacts);
				} else {
					console.error(result.message);
				}
			} catch (error) {
				console.error("Error fetching contacts:", error);
			}
		};
		fetchGroupContacts();
	}, [groupId]);
};

export default useGroupContactFetch;