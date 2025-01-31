import Cookies from 'js-cookie';

import { useState, useEffect } from 'react';

const URL = (groupId) => `http://localhost:5001/api/group/${groupId}/contact/`;

const sessionToken = Cookies.get("sessionToken");

const headers = {
	"Content-Type": "application/json",
	"Authorization": `Bearer ${sessionToken}`
};

export const getContactsInGroup = async (groupId) => {
	try{
		const response = await fetch(URL(groupId), {
			method: "GET",
			headers,
		});
		const data = await response.json();

	    if (response.ok) {
	      return { success: true, data };
	    } else {
	      return { success: false, message: data.message || "Something went wrong" };
	    }

  } catch (err) {
    return { success: false, message: err.message };
  }
};

export const getContactInGroup = async (groupId, id) => {
	const url = `${URL(groupId)}${id}`
	try{
		const response = await fetch(url, {
			method: "GET",
			headers,
		});

		const data = await response.json();
	    if (response.ok) {
	      return { success: true, data };
	    } else {
	      return { success: false, message: data.message || "Something went wrong" };
	    }

  } catch (err) {
    return { success: false, message: err.message };
  }
};

export const postContactInGroup = async (groupId, userData) => {
	try{
		const response = await fetch(URL(groupId), {
			method: "POST",
			headers,
			body: JSON.stringify(userData),
		});
		const data = await response.json();
	    if (response.ok) {
	      return { success: true, data };
	    } else {
	      return { success: false, message: data.message || "Something went wrong" };
	    }
  	} catch (err) {
	    return { success: false, message: err.message };
	}
};

export const putContactInGroup = async (groupId, id, userData) => {
	const url = `${URL(groupId)}${id}`
	try{
		const response = await fetch(url, {
			method: "PUT",
			headers,
			body: JSON.stringify(userData),
		});
		const data = response.json();

	    if (response.ok) {
	      return { success: true, data };
	    } else {
	      return { success: false, message: data.message || "Something went wrong" };
	    }
  	} catch (err) {
	    return { success: false, message: err.message };
	} 
};

export const deleteContactInGroup = async (groupId, id) => {
	const url = `${URL(groupId)}${id}`
	try{
		const response = await fetch(url, {
			method: "DELETE",
			headers,
		});

		const data = await response.json();
	    if (response.ok) {
	      return { success: true, message: "Group Contact Deleted Successfully!" };
	    } else {
	      return { success: false, message: data.message || "Something went wrong" };
	    }

  } catch (err) {
    return { success: false, message: err.message };
  }
};
