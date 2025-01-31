import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar"; 
import SessionExpired from "./components/SessionExpired";
import GroupInviteModal from "./pages/GroupInviteModal";
import useSessionCheck from "./services/useSessionCheck";

import {
	handleAddContact,
	handleUpdateContact,
	handleDeleteContact,
} from "./helper/handleContact";

import useContactFetch from "./hooks/useContactFetch";
import useCurrentUserFetch from "./hooks/useCurrentUserFetch";

import { onAcceptGroupInvite, onCloseGroupInvite, onViewGroupInvite } from "./helper/handleGroupInvite";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Group from "./pages/Group";

import LandingPage from "./LandingPage/pages/LandingPage";

import useExtractGroupInviteCode from "./hooks/useExtractGroupInviteCode";
import useGroupInviteNavigate from "./hooks/useGroupInviteNavigate";

import { handleGroupUpdate, handleGroupDelete } from "./helper/handleGroup";

import useGroupContactFetch from "./hooks/useGroupContactFetch";
import useCurrentGroupFetch from "./hooks/useCurrentGroupFetch";
import useGroupFetch from "./hooks/useGroupFetch";

import CustomButton2 from './components/ui/CustomButton2';

import homeIcon from "./assets/homeIcon";
import CreateGroupModal from "./components/NewGroup"; 
import { postGroup } from "./services/groupUserCRUD";

import PreviewContact from './components/PreviewContact';
import AddContactForm from './components/AddContactForm';
import NewCard from './components/NewCard';
import LinkModal from './components/LinkModal';
import ContactCard from './components/ContactCard';

function AppRouter() {
	const [currentUser, setCurrentUser] = useState({});
	const [groups, setGroups] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [groupInviteCode, setGroupInviteCode] = useState(null);
	const [theme, setTheme] = useState(true);

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	// Fetch Groups -> [Group]
	useGroupFetch(setGroups);

	// Fetch Current User -> User
	useCurrentUserFetch(setCurrentUser);

	// Extracts group invite code, if exists
	// Stores group invite code in local storage with key "groupInviteCode"
	useExtractGroupInviteCode(location.pathname, setGroupInviteCode);

	// Separate navigation logic
	useGroupInviteNavigate(navigate, groupInviteCode, loggedIn);
	
	return (
		<Routes>
			<Route 
				path="/"
				element={<LandingPage navigate={navigate}/>}
			/>
			<Route
				path="/Login"
				element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
			/>
			<Route path="/SignUp" element={<SignUp />} />
			<Route
				path="/Home"
				element={
					<Home
					PreviewContact={PreviewContact}
					AddContactForm={AddContactForm}
					NewCard={NewCard}
					LinkModal={LinkModal}
					ContactCard={ContactCard}
					homeIcon={homeIcon}
					CreateGroupModal={CreateGroupModal}
					postGroup={postGroup}
					CustomButton2={CustomButton2}
					Navbar={Navbar}
					MainContent={MainContent}
					Sidebar={Sidebar}
					SessionExpired={SessionExpired}
					GroupInviteModal={GroupInviteModal}
					useSessionCheck={useSessionCheck}
					handleAddContact={handleAddContact}
					handleUpdateContact={handleUpdateContact}
					handleDeleteContact={handleDeleteContact}
					useContactFetch={useContactFetch}
					useCurrentUserFetch={useCurrentUserFetch}
					onAcceptGroupInvite={onAcceptGroupInvite}
					onCloseGroupInvite={onCloseGroupInvite}
					theme={theme}
					setTheme={setTheme}
					groups={groups}
					setGroups={setGroups}
					currentUser={currentUser}
					setCurrentUser={setCurrentUser}
					/>
				}
			/>
			<Route
				path="/Group/:groupId"
				element={
					<Group
					useSessionCheck={useSessionCheck}
					PreviewContact={PreviewContact}
					AddContactForm={AddContactForm}
					NewCard={NewCard}
					LinkModal={LinkModal}
					ContactCard={ContactCard}
					homeIcon={homeIcon}
					CreateGroupModal={CreateGroupModal}
					postGroup={postGroup}
					CustomButton2={CustomButton2}
					Navbar={Navbar}
					MainContent={MainContent}
					Sidebar={Sidebar}
					SessionExpired={SessionExpired}
					handleAddContact={handleAddContact}
					handleUpdateContact={handleUpdateContact}
					handleDeleteContact={handleDeleteContact}
					useGroupContactFetch={useGroupContactFetch}
					useCurrentUserFetch={useCurrentUserFetch}
					useCurrentGroupFetch={useCurrentGroupFetch}
					useGroupFetch={useGroupFetch}
					theme={theme}
					setTheme={setTheme}
					groups={groups}
					setGroups={setGroups}
					currentUser={currentUser}
					setCurrentUser={setCurrentUser}
					handleGroupUpdate={handleGroupUpdate}
					handleGroupDelete={handleGroupDelete}
					/>
				}
			/>
		</Routes>
	);
}

export default AppRouter;