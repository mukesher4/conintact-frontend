import { getGroup } from "../services/groupUserCRUD";

export const fetchGroup = async (groupId) => {
	try {
		const result = await getGroup(groupId);
		if (result.success) {
			console.log(result.data);
			return result.data;
		} else {
			console.error(result.message);
		}
	} catch (error) {
		console.error("Error fetching Current Group:", error);
	}
	return null;
};