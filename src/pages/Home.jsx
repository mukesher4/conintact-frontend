import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Cookies from 'js-cookie';

import { onViewGroupInvite } from '../helper/handleGroupInvite';

const Home = ({
	PreviewContact,
	AddContactForm,
	NewCard,
	LinkModal,
	ContactCard,
	homeIcon,
	CustomButton2,
	Navbar,
	MainContent,
	Sidebar,
	SessionExpired,
	GroupInviteModal,
	useSessionCheck,
	handleAddContact,
	handleUpdateContact,
	handleDeleteContact,
	useContactFetch,
	useCurrentUserFetch,
	onAcceptGroupInvite,
	onCloseGroupInvite,
	theme, 
	setTheme,
	groups,
	setGroups,
	currentUser,
	setCurrentUser,
}) => {
	const [groupInviteCode, setGroupInviteCode] = useState(
	    Cookies.get("groupInviteCode")
	);

	const navigate = useNavigate();

	const [searchQuery, setSearchQuery] = useState("");
	const [sessionExpire, setSessionExpire] = useState(false);
	const [contact, setContact] = useState([]);

	// Check Session Status every 1 min
	useSessionCheck(navigate, setSessionExpire);

	// Fetch Fresh Contacts -> [Contact]
	useContactFetch(setContact);

	// Filter based on Search Query -> [Contact]
	const filteredContacts = contact.filter((contact) =>
		contact.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div

    	style={{ backgroundColor: theme ? '#000000' : '#ffffff' }}
		className="transition-all duration-300 min-h-screen overflow-x-hidden w-screen max-w-screen overflow-hidden bg-[#000000]"
		>
			<div
			className="ml-60 pb-14">
				{sessionExpire && <SessionExpired
				CustomButton2={CustomButton2}
				theme={theme}
				navigate={navigate}
				/>}

				{groupInviteCode && 
					<GroupInviteModal
						navigate={navigate}
						setGroups={setGroups}
						groupInviteCode={groupInviteCode}
						setGroupInviteCode={setGroupInviteCode}
						onAcceptGroupInvite={onAcceptGroupInvite}
						onCloseGroupInvite={onCloseGroupInvite}
						onViewGroupInvite={onViewGroupInvite} />
				}

				<div id="view-pane"
				className="flex">
					<Sidebar
						homeIcon={homeIcon}
						theme={theme}
						isGroup={false}
						navigate={navigate}
						setGroups={setGroups}
						groups={groups} 
					/>
					<div id="content-area"
					className="w-full ml-40 flex-1"
					>
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
							isGroup={false}
							setCurrentGroup={null}
							handleGroupUpdateInState={null}
							contact={filteredContacts}
							setContact={setContact}
							handleAddContact={handleAddContact}
							handleUpdateContact={handleUpdateContact}
							handleDeleteContact={handleDeleteContact} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
