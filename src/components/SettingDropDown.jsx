import { useNavigate } from 'react-router-dom';
import { logOut } from '../services/userFunctionalities'; 
import { useState } from 'react';
import ProfileModal from './ProfileModal';

const SettingDropDown = ({
  theme,
  currentUser,
  setCurrentUser,
  onUpdateUser
}) => {
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(false);

  const toggleProfileModal = () => setShowProfileModal(!showProfileModal);

  return (
    <div className="z-50 relative">
      <div
      style={{ backgroundColor: theme ? '#121212' : '#eeeeee' }}          
      className="overflow-hidden w-48 bg-[#121212] text-white rounded-lg shadow-lg mt-2 absolute right-0">
        <div
          className="cursor-pointer p-2"
          onClick={toggleProfileModal}>
          <span
          style={{ color: theme ? '#ffffff' : '#000000' }}
          >
            Profile
          </span>
        </div>
        <div
          className="cursor-pointer p-2"
          onClick={() => logOut(navigate)}>
          <span
          style={{ color: theme ? '#ffffff' : '#000000' }}
          >
            Logout
          </span>
        </div>
      </div>
      
      {showProfileModal && (
      	<ProfileModal currentUser={currentUser} setCurrentUser={setCurrentUser} toggleProfileModal={toggleProfileModal} onUpdateUser={onUpdateUser}/>
      )}
    </div>
  );
};

export default SettingDropDown;