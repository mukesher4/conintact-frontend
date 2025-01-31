import { useState } from "react";

import { accept, view } from "../services/groupInviteCRUD";

import { fetchGroup } from "./fetchGroup";

import Cookies from 'js-cookie';

export const onAcceptGroupInvite = async (
	navigate,
	setGroupInviteCode,
	groupInviteCode,
	setGroups,
) => {
	const response = await accept(groupInviteCode); 

	if (response.success) {
		
		const groupId = response.data;

		let invitedGroup = await fetchGroup(groupId);

		setGroups((prevGroups) => 
			[ ...prevGroups,  invitedGroup]);

		setGroupInviteCode(null); 
		
		Cookies.remove("groupInviteCode");

		navigate(`/Group/${response.data}`);
	}
};

export const onCloseGroupInvite = (navigate, setGroupInviteCode) => {
	Cookies.remove("groupInviteCode");
	setGroupInviteCode(null); 
	navigate("/Home");
};

export const onViewGroupInvite = async (setGroupDetail, groupInviteCode) => {
	const response = await view(groupInviteCode); 

	if (response.success) {
		const groupId = response.data;
		// console.log(`groupId:${JSON.stringify(groupId)}`);
		let group;
		try {
			group = await fetchGroup(groupId);
		} catch (error) {
			console.error("Error fetching group: ", error);
			return null;
		}
		
		setGroupDetail(group);
	}
	return null;
};