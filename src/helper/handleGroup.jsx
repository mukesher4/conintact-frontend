// Linearly searches id, replaces group
export const handleGroupUpdate = (setGroups, updatedGroup) => {
	setGroups((prevGroups) =>
		prevGroups.map((group) =>
			group._id === updatedGroup._id ? updatedGroup : group
		)
	);
};

// Filters out the group which matches id of deleted group 
export const handleGroupDelete = (setGroups, deletedGroupId) => {
	setGroups((prevGroups) =>
		prevGroups.filter((group) => group._id !== deletedGroupId)
	);
};