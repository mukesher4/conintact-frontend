import { useEffect } from "react";

const useGroupInviteNavigate = (navigate, groupInviteCode, loggedIn) => {
	useEffect(() => {
		if (groupInviteCode) {
			if (loggedIn) {
				navigate("/Home");
			} else {
				navigate("/Login");
			}
		}
	}, [groupInviteCode, loggedIn, navigate]);
};

export default useGroupInviteNavigate;