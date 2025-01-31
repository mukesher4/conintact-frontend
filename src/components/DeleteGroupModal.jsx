import { deleteGroup } from "../services/groupUserCRUD";

import { useNavigate } from "react-router-dom";

import CustomButton2 from './ui/CustomButton2';

const DeleteGroupModal = ({
	theme, 
	setGroups,
	handleGroupDelete,
	isDeleteGroup,
	isGroup,
}) => {
	const navigate = useNavigate();

	const handleDelete = async () => {
		const response = await deleteGroup(isGroup._id);
		console.log(JSON.stringify(response));
		if (!response.success) {
			console.log("Error Deleting Group");
		} else {
			handleGroupDelete(setGroups, isGroup._id);
			navigate("/Home");
		}
	};

	return (
		<div
		id="modal"
        style={{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }}
		className="rounded-lg p-10 shadow-lg max-w-sm w-full"
		>

			<h2
			style={{ color: theme ? '#ffffff' : '#000000' }}
			className="text-2xl font-bold mb-8">Delete Group?</h2>
			
			<h2
			style={{ color: theme ? '#ffffff' : '#000000' }}
			className="text-xl mb-8">This will delete <span className="font-bold">{isGroup.name}</span> and all the data associated with it.</h2>

			<div className="flex justify-between">
				<CustomButton2
				id={"delete-close-button"}
				value={"Close"}
				size="sm"
				theme={theme} 
				/>
				<button
					onClick={handleDelete}
					className="bg-red-500 text-white text-md  px-4 py-1 rounded-md shadow-md hover:bg-red-800 focus:outline-none"
				>
					Delete
				</button>
				
			</div>
		</div>
	);
};

export default DeleteGroupModal;