import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GroupInviteModal({ 
	navigate,
	setGroups,	
	groupInviteCode,
	setGroupInviteCode,
	onAcceptGroupInvite,
	onCloseGroupInvite,
	onViewGroupInvite,
}) {
	const [viewGroupDetail, setGroupDetail] = useState(null);

	const handleAcceptGroupInvite = () => {
		if (groupInviteCode) {
			onAcceptGroupInvite(navigate, setGroupInviteCode, groupInviteCode, setGroups); 
		}
	};

	const handleCloseGroupInvite = () => {
		if (groupInviteCode) {
			onCloseGroupInvite(navigate, setGroupInviteCode); 
		}
	};

	useEffect(()=>{
		const handleViewGroupInvite = () => {
			console.log(`groupInviteCode:${groupInviteCode}`);
			if (groupInviteCode) {
				onViewGroupInvite(setGroupDetail, groupInviteCode);
			}
		};
		handleViewGroupInvite();
	},[]);

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-70">
			<div
			style={{ backgroundColor: '#0a0a0a' }}
			className="rounded-lg shadow-lg p-6 max-w-md w-full text-center">
				<h2 className="text-2xl font-bold mb-4">Group Invitation</h2>
				<p className="mb-6 text-xl">
					You have been invited to join a group {viewGroupDetail && <span className="font-bold">{viewGroupDetail.name}</span>}
				</p>
				<div className="flex justify-center space-x-4">
					<button
						onClick={handleAcceptGroupInvite}
						className="bg-[#121212] text-white px-4 py-2 rounded transition"
					>
						Accept
					</button>
					<button
						onClick={handleCloseGroupInvite}
						className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
					>
						Decline
					</button>
				</div>
			</div>
		</div>
	);
}

export default GroupInviteModal;
