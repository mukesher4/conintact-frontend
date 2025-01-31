import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Group = ({
	useSessionCheck,
	PreviewContact,
	AddContactForm,
	NewCard,
	LinkModal,
	ContactCard,
	homeIcon,
	CreateGroupModal,
	postGroup,
	CustomButton2,
	useGroupContactFetch,
	useCurrentUserFetch,
	useCurrentGroupFetch,
	useGroupFetch,
	Navbar,
	MainContent,
	Sidebar,
	SessionExpired,
	handleAddContact,
	handleUpdateContact,
	handleDeleteContact,
	theme,
	setTheme,
	groups,
	setGroups,
	currentUser,
	setCurrentUser,
	handleGroupUpdate,
	handleGroupDelete,
}) => {
	const { groupId } = useParams();
	const [currentGroup, setCurrentGroup] = useState([]);
	const [groupContact, setGroupContact] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [sessionExpire, setSessionExpire] = useState(false);
	const navigate = useNavigate();

	// Check Session Status every 1 min
	useSessionCheck(navigate, setSessionExpire);

	// Fetch Fresh Group Contacts -> [Contact]
	useGroupContactFetch(setGroupContact, groupId);

	// Fetch Current Group -> Group
	useCurrentGroupFetch(setCurrentGroup, groupId);

	// Filter based on Search Query -> [Contact]
	const filteredGroupContacts = groupContact.filter((contact) =>
		contact.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

  return (
		<div
    	style={{ backgroundColor: theme ? '#000000' : '#ffffff' }}
		className="overflow-x-hidden w-screen transition-all duration-300 bg-[#000000]"
		>
			<div className="ml-60 pb-14">
				{sessionExpire && <SessionExpired
				CustomButton2={CustomButton2}
				theme={theme}
				navigate={navigate} />}
				
				<div id="view-pane" className="flex">
					<Sidebar
					homeIcon={homeIcon}
					CreateGroupModal={CreateGroupModal}
					postGroup={postGroup}
					theme={theme}
					isGroup={currentGroup}
					navigate={navigate}
					setGroups={setGroups}
					groups={groups} />
					<div id="content-area" className="pl-40 flex-1">
						<Navbar
						theme={theme}
						setTheme={setTheme}
						currentUser={currentUser}
						setCurrentUser={setCurrentUser}
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery} />
						<MainContent
						PreviewContact={PreviewContact}
						AddContactForm={AddContactForm}
						NewCard={NewCard}
						LinkModal={LinkModal}
						ContactCard={ContactCard}
						homeIcon={homeIcon}
						theme={theme}
						currentUser={currentUser}
						setCurrentGroup={setCurrentGroup}
						handleGroupUpdate={handleGroupUpdate}
						handleGroupDelete={handleGroupDelete}
						isGroup={currentGroup}
						contact={filteredGroupContacts}
						setContact={setGroupContact}
						handleAddContact={handleAddContact}
						setGroups={setGroups}
						handleUpdateContact={handleUpdateContact}
						handleDeleteContact={handleDeleteContact} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Group;