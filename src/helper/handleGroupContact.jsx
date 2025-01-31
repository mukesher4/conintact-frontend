import { useState, useEffect } from "react";

import { 
	getContactsInGroup,
	postContactInGroup,
	putContactInGroup,
	deleteContactInGroup
} from '../services/groupContactCRUD';


export const handleAddContact = async (setGroupContact, groupContact, setNewModal, groupId, newContact) => {
	const result = await postContactInGroup(groupId, newContact);
	if (result.success) {
		setGroupContact([...groupContact, newContact]);
	} else {
		console.log(result.message);
	}
	setNewModal(false); 
};

export const handleUpdateContact = async (setGroupContact, groupId, updatedContact) => {
  try {
    console.log('Updating contact:', updatedContact);
    const contactId = updatedContact._id;
    const result = await putContactInGroup(groupId, contactId, updatedContact);

    if (result.success) {
      setGroupContact((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === contactId ? { ...contact, ...updatedContact } : contact
        )
      );
      console.log('Contact updated successfully');
    } else {
      console.error('Failed to update contact:', result.message);
    }
  } catch (error) {
    console.error('Error updating contact:', error);
  }
};
export const handleDeleteContact = async (setGroupContact, setContactModal, groupId, deletedContactId) => {
	const result = await deleteContactInGroup(groupId, deletedContactId);
	if (result.success) {
		setGroupContact((prevContacts) =>
			prevContacts.filter((contact) => contact._id !== deletedContactId)
		);
	} else {
		console.error(result.message);
	}
	setContactModal({}); 
};