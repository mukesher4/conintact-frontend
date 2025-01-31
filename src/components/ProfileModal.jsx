import DisplayProfile from './DisplayProfile';
import { useState, useEffect, useRef } from 'react';
import anon from '../assets/anon';

const ProfileModal = ({
  theme,
  currentUser,
  setCurrentUser,
  toggleProfileModal,
  onUpdateUser,
}) => {
  const dropdownRef = useRef(null);
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [image, setImage] = useState(currentUser?.image ? currentUser.image : anon);
  const [edit, setEdit] = useState(false);

  const closeModal = (e) => {
    if (e.target.id === 'modal-background') {
      toggleProfileModal();
    }
  };

  const handleUpdate = () => {
    if (edit) {
      onUpdateUser({
        ...currentUser,
        username,
        email,
        image,
      });
    }
    setEdit(!edit);
  };



  return (
    <div 
      id="modal-background" 
      onClick={(e) => closeModal(e)}
      className="w-full fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
      style={{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }}  
      onClick={(e) => e.stopPropagation()}
      className="p-4 rounded-lg shadow-lg w-96">
        <div className="flex justify-center items-center">
          <div
          style={{ color: theme ? '#ffffff' : '#000000' }}
          className="text-3xl font-bold mt-2 mb-4">Profile</div>
          <div className="relative ml-auto"> 
            {edit ? (
              <button
                className="focus:outline-none bg-transparent text-[#d4a017] transition-colors"
                onClick={handleUpdate}
              >
                ✔
              </button>
            ) : (
              <button
                data-ignore="dropdown-button"
                className="focus:outline-none bg-transparent text-[#d4a017] transition-colors"
                onClick={(e) => {
                  e.stopPropagation(); 
                  setEdit((edit)=>!edit); 
                }}
              >
                ✎
              </button>
            )}
          </div> 
        </div> 
        <DisplayProfile theme={theme} edit={edit} image={image} setImage={setImage} />

        <div className="mb-8">
          {edit ? (
            <input
              style={{ 
                backgroundColor: theme ? `#121212` : `#eeeeee`,
                color: theme ? '#ffffff' : '#000000',
              }}
              type="text"
              className="w-3/4 p-2 rounded-lg"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              disabled={!edit}
            />
          ) : (
            <div
            style={{ 
              color: theme ? '#ffffff' : '#000000',
            }}
            className="text-2xl">{username}</div>
          )}
        </div>

        <div className="mb-4">
          <input
            style={{ 
              backgroundColor: theme ? `#121212` : `#eeeeee`,
              color: theme ? '#ffffff' : '#000000'
            }}
            type="email"
            className="w-full p-2 rounded-lg"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            disabled
            value={email}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
