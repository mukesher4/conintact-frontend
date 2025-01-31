import { useEffect } from "react";

import Cookies from 'js-cookie';

// Extracts group invite code, if exists
// Stores group invite code in local storage with key "groupInviteCode"
const useExtractGroupInviteCode = (pathname, setGroupInviteCode) => {
	useEffect(() => {
		const extractGroupInviteCode = () => {
			let code = null;
			if (pathname.startsWith("/group-invite/")) {
				code = pathname.split("/")[2]; 

				Cookies.set("groupInviteCode", code, { path:'/' });

				setGroupInviteCode(code);
			}
		};
		extractGroupInviteCode();
	}, [pathname]);
};

export default useExtractGroupInviteCode;