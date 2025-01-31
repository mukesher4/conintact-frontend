import { useState, useEffect } from "react";

import { 
	getContacts,
	postContact,
	updateContact,
	deleteContact
} from '../services/contactCRUD';
import { 
	getContactsInGroup,
	postContactInGroup,
	putContactInGroup,
	deleteContactInGroup
} from '../services/groupContactCRUD';

export const handleAddContact = async (
	setContact, setNewModal, contact,
	isGroup, newContact
	) => {

	let result;
	if (isGroup._id) {
		result = await postContactInGroup(isGroup._id, newContact);
	} else {
		result = await postContact(newContact);
	}

	if (result.success) {
		setContact([...contact, newContact]);
	} else {
		console.log(result.message);
	}
	setNewModal(false); 
};

export const handleUpdateContact = async (
	setContact, isGroup, updatedContact
	) => {
	const contactId = updatedContact._id;
	
	let result;
	if (isGroup._id) {
		result = await putContactInGroup(isGroup._id, contactId, updatedContact);

	} else {
		result = await updateContact(contactId, updatedContact);
	}

	if (result.success) {
		setContact((prevContacts) =>
			prevContacts.map((contact) =>
				contact._id === contactId ? { ...contact, ...updatedContact } : contact
			)
		);
	} else {
		console.log("Not Able to Update");
		console.error(result.message);
	}
};

export const handleDeleteContact = async (
	setContact, setContactModal, isGroup, deletedContactId
	) => {

	let result;
	if (isGroup._id) {
		result = await deleteContactInGroup(isGroup._id, deletedContactId);
	} else {
		result = await deleteContact(deletedContactId);
	}

	if (result.success) {
		setContact((prevContacts) =>
			prevContacts.filter((contact) => contact._id !== deletedContactId)
		);
	} else {
		console.error(result.message);
	}
	setContactModal({}); 
};
