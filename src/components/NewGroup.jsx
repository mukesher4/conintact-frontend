import { useState } from "react";
import UploadImageButton from "./UploadImageButton";
import CustomButton2 from './ui/CustomButton2';

const NewGroup = ({
  theme,
  onClose,
  onCreate,
}) => {
  const [groupName, setGroupName] = useState("");
  const [groupIcon, setGroupIcon] = useState(null);

  const handleSubmit = () => {
    if (groupName.trim() === "") {
      alert("Group name cannot be empty.");
      return;
    }
    onCreate({ name: groupName, image: groupIcon });
    onClose();
  };

const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    onClose();
  }
};

  return (
    <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={handleBackdropClick}>
      <div
      style={{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }}
      className="bg-[#0b0b0b] text-white rounded-lg p-6 w-[400px] shadow-lg">
        <h2
        style={{ color: theme ? '#ffffff' : '#000000' }}
        className="text-3xl font-bold text-center mb-4">Create Group</h2>
        <div className="flex flex-col items-center mb-0">
          <UploadImageButton
            theme={theme}
            image={groupIcon}
            setImage={setGroupIcon}
          />
        </div>
        <div className="mb-6">
          <input
            style={{
              color: theme ? '#ffffff' : '#000000',
              backgroundColor: theme ? `#121212` : `#eeeeee`
            }}  
            type="text"
            className="text-xl w-full p-2 rounded-lg"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Group Name"

          />
        </div>
        <div className="flex justify-center">
          <CustomButton2
          id={"delete-close-button"}
          value={"Create"}
          theme={theme} 
          handleClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default NewGroup;
