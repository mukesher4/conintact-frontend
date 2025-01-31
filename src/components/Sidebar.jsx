import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import NewGroup from './NewGroup';

import { postGroup } from '../services/groupUserCRUD';

const Sidebar = ({ 
    homeIcon,
    theme,
    isGroup,
    navigate,
    setGroups,
    groups,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddGroupClick = () => {
        setIsModalOpen(true); 
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); 
    };

    const handleCreateGroup = async(newGroup) => {
        const result = await postGroup(newGroup);
        console.log(`result: ${JSON.stringify(result)}`);
        if (result.success) {
            setGroups([...groups, result.data]);
        } else {
            console.log(result.message);
        }
        setIsModalOpen(false);
    };

    return (
        <div
            className="transition-all duration-300 z-60"
            style={{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }} 
        >
            <div 
                className="p-2 fixed top-0 left-0 w-[25rem] h-screen text-white flex flex-col transition-all duration-300"
                style={{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }}
            >
                <div className="flex items-center h-[9rem] mb-2">
                    <h2
                        style={{ color: theme ? '#ffffff' : '#000000' }}
                        className="p-6 text-left text-4xl font-regular"
                    >
                        Groups<span className="text-[#d4a017]">.</span>
                    </h2>
                </div>
                
                <div className="flex-1 overflow-y-auto scrollbar-hidden mb-4">
                    <ul className="flex-1 space-y-6 p-2">
                        {/* Home Group */}
                        <li
                            key="0"
                            style={{
                                backgroundColor: theme ? '#141414' : '#ebebeb',
                                color: theme ? '#ffffff' : '#000000',
                                transition: 'all 300ms',
                            }}
                            className="ml-2 mr-2 flex items-center space-x-3 p-4 rounded-xl cursor-pointer"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = theme ? '#2b2b2b' : '#d4d4d4';
                                e.currentTarget.style.color = theme ? '#ffffff' : '#000000';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = theme ? '#141414' : '#ebebeb';
                                e.currentTarget.style.color = theme ? '#ffffff' : '#000000';
                            }}
                            onClick={() => { navigate("/Home") }}
                        >
                            <img
                                src={homeIcon}
                                alt="Home"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <span className="truncate text-[23px]">Home</span>
                        </li>

                        {/* Other Groups */}
                        {groups.map((group, index) => (
                            <li
                                key={index}
                                style={{
                                    backgroundColor: theme 
                                        ? (isGroup._id === group._id ? '#2b2b2b' : '#141414') 
                                        : (isGroup._id === group._id ? '#d4d4d4' : '#ebebeb'),
                                    color: theme ? '#ffffff' : '#000000',
                                    transition: 'all 300ms',
                                }}
                                className="ml-2 mr-2 flex items-center space-x-3 p-4 rounded-xl cursor-pointer"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = theme ? '#2b2b2b' : '#d4d4d4';
                                    e.currentTarget.style.color = theme ? '#ffffff' : '#000000';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = theme 
                                        ? (isGroup._id === group._id ? '#2b2b2b' : '#141414') 
                                        : (isGroup._id === group._id ? '#d4d4d4' : '#ebebeb');
                                    e.currentTarget.style.color = theme ? '#ffffff' : '#000000';
                                }}
                                onClick={() => { navigate(`/Group/${group._id}`) }}
                            >
                                <img
                                    src={group?.image || homeIcon}
                                    alt={group.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <span className="truncate text-[23px]">{group.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Add Group Button */}
                <button
                    style={{
                        backgroundColor: theme ? '#141414' : '#ebebeb',
                        color: theme ? '#ffffff' : '#000000',
                        transition: 'all 300ms',
                    }}
                    className="ml-2 mb-4 mr-2 flex justify-center items-center space-x-3 p-4 rounded-xl cursor-pointer"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = theme ? '#2b2b2b' : '#d4d4d4';
                        e.currentTarget.style.color = theme ? '#ffffff' : '#000000';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme ? '#141414' : '#ebebeb';
                        e.currentTarget.style.color = theme ? '#ffffff' : '#000000';
                    }}
                    onClick={handleAddGroupClick} 
                >
                    <FaPlus style={{ color: '#d4a017' }} className="text-2xl" />
                    <span className="text-center truncate text-[23px]">Add Group</span>
                </button>
            </div>

            {isModalOpen && (
                <NewGroup
                    theme={theme}
                    onClose={handleCloseModal}
                    onCreate={handleCreateGroup}
                />
            )}
        </div>
    );
};

export default Sidebar;