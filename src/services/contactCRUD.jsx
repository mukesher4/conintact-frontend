import Cookies from 'js-cookie';

const URL = "conintact-backend.vercel.app/api/contacts/";

const sessionToken = Cookies.get("sessionToken");

const headers = {
	"Content-Type": "application/json",
	"Authorization": `Bearer ${sessionToken}`
};

export const getContacts = async (id = null) => {
	try {
		const url = id ? `${URL}${id}` : URL;
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

export const postContact = async (contact) => {
	try {
		const response = await fetch(URL, {
			method: "POST",
			headers,
			body: JSON.stringify(contact),
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

export const updateContact = async (id, updatedContact) => {
	try {
		const url = id ? `${URL}${id}` : URL;
		
		const response = await fetch(url, {
			method: "PUT",
			headers,
			body: JSON.stringify(updatedContact),
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

export const deleteContact = async (id) => {
	try {
		const url = `${URL}${id}`;
		const response = await fetch(url, {
			method: "DELETE",
			headers,
		});

		if (response.ok) {
			return { success: true, message: "Contact deleted successfully" };
		} else {
			const data = await response.json();
			return { success: false, message: data.message || "Something went wrong" };
		}
	} catch (err) {
		return { success: false, message: err.message };
	}
};
