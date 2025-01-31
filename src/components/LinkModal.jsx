import { useState, useEffect } from "react";
import { generate } from "../services/groupInviteCRUD";

import CustomButton2 from './ui/CustomButton2';

const LinkModal = ({
  theme,
  isGroup,
  id=null,
}) => {
  const [inviteCode, setInviteCode] = useState(null);
  const [copy, setCopy] = useState("Copy");

  useEffect(() => {
    const fetchInviteCode = async () => {
      const result = await generate(isGroup);
      setInviteCode(result.data);
    };
    fetchInviteCode();
  }, [isGroup]);

  const handleCopyClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inviteCode) {
      try {
        await navigator.clipboard.writeText(`http://localhost:5175/group-invite/${inviteCode}/`);
        setCopy("Copied!");
      } catch (error) {
        console.error("Failed to copy text:", error);
        setCopy("Copy Failed");
      }
    }
  };

  return (
    <div
      id="modal"
      className="rounded-lg p-10 shadow-lg max-w-sm w-full"
      style=  {{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }}  
    >
      <h2
      style={{ color: theme ? '#ffffff' : '#000000' }}
      className="text-2xl font-bold mb-4">Generate Join Link</h2>

      <div className="flex flex-col gap-4 items-center">
        <div
        style={{ 
          backgroundColor: theme ? `#121212` : `#eeeeee`,
        }}
        className="text-white rounded-md px-4 py-2 flex-1 overflow-hidden">
			{inviteCode ? 
				<span
        style={{ color: theme ? '#ffffff' : '#000000' }}
        className="truncate">{`http://localhost:5173/group-invite/${inviteCode}/`}</span>
				:
				<span
        style={{ color: theme ? '#ffffff' : '#000000' }}
        >Loading...</span>
			}

        </div>
        <div
        style={{ color: theme ? '#ffffff' : '#000000' }}
        className="opacity-95 mb-4 mt-1">Share this link to add users to this group</div>
        <CustomButton2
          size={"sm"}
          handleClick={(e)=>{handleCopyClick(e)}}
          value={copy}
          theme={theme}
        />
      </div>
    </div>
  );
};
export default LinkModal;
