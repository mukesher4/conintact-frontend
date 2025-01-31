import { useEffect } from 'react';

import Cookies from 'js-cookie';

const useSessionCheck = (navigate, setSessionExpire) => {
	const sessionToken = Cookies.get("sessionToken");
  
	useEffect(() => {
		const interval = setInterval(async () => {
		try {
			const response = await fetch("http://localhost:5001/api/sessionStatus", {
				method: "GET",
				headers: {
				Authorization: `Bearer ${sessionToken}`,
				},
			});
			if (response.status === 401) {
				console.log("Session expired");
				setSessionExpire(true);
				clearInterval(interval); 
			}
		} catch (error) {
			console.error("Error checking session status:", error);
		}
	}, 1000);

	return () => clearInterval(interval);
	}, []);
};

export default useSessionCheck;
