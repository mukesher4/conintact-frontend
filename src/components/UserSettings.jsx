import { useState, useEffect, useRef } from 'react';
import SettingDropDown from './SettingDropDown';
import anon from '../assets/anon';
import { updateUser } from '../services/userCRUD';

const UserSettings = ({
  theme,
  currentUser,
  setCurrentUser,
}) => {
  const [showSetting, setShowSetting] = useState(false);
  const buttonRef = useRef(null);  
  const dropdownRef = useRef(null);  

	const handleClick = () => {
		setShowSetting(!showSetting);
	};

	const onUpdateUser = async (updatedUser) => {
	    const result = await updateUser(updatedUser);
	    if (result.success) {
	    	setCurrentUser(result.data);
	    } else {
	      console.log("Not Able to Update");
	      console.error(result.message);
	    }
	};

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        buttonRef.current && !buttonRef.current.contains(e.target) && 
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setShowSetting(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}  
        className="border-none bg-transparent cursor-pointer p-0 rounded-full w-16 h-16"
        onClick={handleClick}
      >
        <img
          className="rounded-full object-cover w-16 h-16"
          src={currentUser?.image ? currentUser?.image : anon}
          alt="User Avatar"
        />
      </button>
      {showSetting && (
        <div ref={dropdownRef}>  
          <SettingDropDown theme={theme} currentUser={currentUser} setCurrentUser={setCurrentUser} onUpdateUser={onUpdateUser}/>
        </div>
      )}
    </div>
  );
};

export default UserSettings;
