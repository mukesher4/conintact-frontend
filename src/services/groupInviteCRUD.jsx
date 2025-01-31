import Cookies from 'js-cookie';

const URL = "conintact-backend.vercel.app/api/invite/";

const sessionToken = Cookies.get("sessionToken");

const headers = {
	"Content-Type": "application/json",
	"Authorization": `Bearer ${sessionToken}`
};

export const generate = async (groupId) => {
	const url = `${URL}${groupId}`;
	try {
		const response = await fetch(url, {
			method: "POST",
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

export const accept = async (inviteCode) => {
	const url = `${URL}${inviteCode}`;
	try {
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

export const view = async (inviteCode) => {
	const url = `${URL}${inviteCode}/view`;
	try {
		const response = await fetch(url, {
			method: "GET",
			headers,
		});
		const data = await response.json();
		if (response.ok) {
			console.log(`response.json():${JSON.stringify(data)}`);
			return { success: true, data };
		} else {
			return { success: false, message: data.message || "Something went wrong" };
		}
	} catch (err) {
		return { success: false, message: err.message };
	}
};
