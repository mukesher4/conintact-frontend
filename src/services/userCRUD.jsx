export const logInUser = async (userData) => {
	try {
		const response = await fetch("https://conintact-backend.vercel.app/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(userData)
		});

		const data = await response.json();

		if (response.ok) {
			return { success: true, data };
		} else {
			return { success: false, message: data.message || data.title || "Something Went Wrong" };
		}

	} catch(err) {
		return { success: false, message: err.message };
	}
};

export const signUpUser = async (userData) => {
	try{
		const response = await fetch("https://conintact-backend.vercel.app/api/users/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(userData)
		});

		const data = await response.json();
		if (response.ok) {
			return { "success": true, "message": "Account Created Successfully" }
		} else {
			return { "success": false, "message": data.message || data.title || "Something Went Wrong" }
		}

	} catch (error) {
		return { "success": false, "message": "Error: Could not connect to the Server" }	
	}
};

export const getCurrentUser = async () => {
	const sessionToken = document.cookie.split("=")[1];

	try {
		const response = await fetch("https://conintact-backend.vercel.app/api/users/current", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${sessionToken}`
			},
		});

		const data = await response.json();
		if (response.ok) {
			return { "success": true, data };
		} else {
			return { "success": false, message: data.message || "Something went wrong" };
		} 
	} catch (error) {
		return { "success": false, "message": "Error: Could not connect to the Server" }	
	}
};

export const updateUser = async (updatedUser) => {
	const sessionToken = document.cookie.split("=")[1];

	try {
		const url = "conintact-backend.vercel.app/api/users/";
		
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${sessionToken}`
			},
			body: JSON.stringify(updatedUser),
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
