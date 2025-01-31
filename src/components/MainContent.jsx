import { useState, useEffect } from "react";

import linkBlackImage from '../assets/linkBlack.png';
import deleteBlackImage from '../assets/garbageBlack.png';

import linkWhiteImage from '../assets/linkWhite.png';
import deleteWhiteImage from '../assets/garbageWhite.png';

import imageCompression from 'browser-image-compression';

import { updateGroup } from "../services/groupUserCRUD";

import DeleteGroupModal from './DeleteGroupModal';

const MainContent = ({
    PreviewContact,
    AddContactForm,
    NewCard,
    LinkModal,
    ContactCard,
    homeIcon,
    theme,
    handleDeleteContact,
    currentUser,
    isGroup,
    setCurrentGroup,
    contact,
    setContact,
    setGroups,
    handleAddContact,
    handleUpdateContact,
    handleGroupUpdate,
    handleGroupDelete,
}) => {
    const [isDeleteGroup, setIsDeleteGroup] = useState(false);
    useEffect(() => {
        if (isGroup) {
            const handleGroupUpdateWrapper = async (id, updatedGroup) => {
                const response = await updateGroup(id, updatedGroup);
                if (!response.success) {
                    console.log("Error in Updating Group! " + response.message);
                } else {
                    handleGroupUpdate(setGroups, updatedGroup);
                }
            };
            handleGroupUpdateWrapper(isGroup._id, isGroup);
        }
    }, [isGroup]);

    const [showNewModal, setNewModal] = useState(false);
    const [showContactModal, setContactModal] = useState({});
    const [linkModal, setLinkModal] = useState(false);

    const closeModal = (e) => {
        if (e.target.id === 'modal-background-link') {
            setLinkModal(false);
        } else if (e.currentTarget.id === 'modal-background-delete' || e.target.id === 'delete-close-button') {
            setIsDeleteGroup(false);
        } else if (e.target.id === 'modal-background-new-contact') {
            setNewModal(false);
        } else if (e.target.id === 'modal-background-existing-contact') {
            setContactModal({});
        }
    };

    const handleGroupImageUpload = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const options = {
                maxSizeMB: 0.1,
                maxWidthOrHeight: 500,
                useWebWorker: true,
            };

            try {
                const compressedFile = await imageCompression(file, options);
                const base64Image = await imageCompression.getDataUrlFromFile(compressedFile);

                setCurrentGroup({ ...isGroup, image: base64Image });
            } catch (error) {
                console.error('Error compressing the image:', error);
            }
        }
    };
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
        const startTime = Date.now(); // Record the start time
        const minimumLoadingTime = 1000; // Minimum loading time in milliseconds (2 seconds)

        setIsLoading(true); // Reset loading state when group changes

        try {
            await contact; // Wait for the contact data to be resolved

            // Calculate the remaining time to meet the minimum loading time
            const elapsedTime = Date.now() - startTime;
            const remainingTime = minimumLoadingTime - elapsedTime;

            if (remainingTime > 0) {
                // Wait for the remaining time before setting isLoading to false
                await new Promise((resolve) => setTimeout(resolve, remainingTime));
            }

            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);

            // Ensure the minimum loading time is respected even if there's an error
            const elapsedTime = Date.now() - startTime;
            const remainingTime = minimumLoadingTime - elapsedTime;

            if (remainingTime > 0) {
                await new Promise((resolve) => setTimeout(resolve, remainingTime));
            }

            setIsLoading(false);
        }
    };

    fetchData();
}, [isGroup._id]); // Re-run effect when contact changes

    return (
        <div
            style={{ backgroundColor: theme ? '#000000' : '#ffffff' }}
            className="transition-all duration-300 scroll-smooth z-70 flex items-center flex-col h-full w-full overflow-x-hidden"
        >
            {isLoading && (
                <div
                    style={{
                    backgroundColor: theme ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)', // Darker for light theme
                    }}
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <div className="flex flex-col items-center">
                        <div
                            style={{ borderTopColor: theme ? '#ffffff' : '#000000' }}
                            className="w-16 h-16 border-4 border-transparent rounded-full animate-spin"
                        ></div>
                        <p
                            style={{ color: theme ? '#ffffff' : '#000000' }}
                            className="mt-4 text-xl"
                        >
                        </p>
                    </div>
                </div>
            )}

            {!isGroup && currentUser?.username && (
                <div
                    style={{ color: theme ? '#ffffff' : '#000000' }}
                    className="mt-44 mb-6 text-5xl text-red"
                >
                    Hello <span className="text-[#d4a017]">@{currentUser.username}!</span>
                </div>
            )}

            {isDeleteGroup && (
                <div
                    id="modal-background-delete"
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                    onClick={(e) => closeModal(e)}
                >
                    <DeleteGroupModal
                        theme={theme}
                        setGroups={setGroups}
                        handleGroupDelete={handleGroupDelete}
                        isDeleteGroup={isDeleteGroup}
                        isGroup={isGroup}
                    />
                </div>
            )}

            {linkModal && (
                <div
                    id="modal-background-link"
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                    onClick={(e) => closeModal(e)}
                >
                    <LinkModal
                        theme={theme}
                        id="modal-background-link"
                        isGroup={isGroup._id}
                    />
                </div>
            )}

            {isGroup && (
                <div className="mt-44 mb-8 text-4xl flex w-full gap-12 ml-72">
                    <div className="w-1/5" id="icon">
                        <label
                            className={`flex justify-center items-center w-48 h-48 rounded-lg cursor-pointer transition-colors duration-200 hover:text-black`}
                            htmlFor="group-file-input"
                        >
                            <img
                                className="w-48 h-48 rounded-lg object-cover"
                                src={isGroup.image || homeIcon}
                            />
                        </label>
                        <input
                            id="group-file-input"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleGroupImageUpload}
                        />
                    </div>

                    <div className="w-full" id="name-desc">
                        <div
                            className={`${isGroup.description ? `` : `justify-center h-full`} flex flex-col gap-12 text-left`}
                        >
                            <div className="text-5xl ml-8 flex w-[880px] gap-8 justify-between">
                                <input
                                    type="text"
                                    id="name"
                                    style={{ color: theme ? '#ffffff' : '#000000' }}
                                    className="w-3/4 bg-transparent overflow-hidden"
                                    onChange={(e) => setCurrentGroup({ ...isGroup, name: e.target.value })}
                                    value={isGroup.name}
                                />
                                <div
                                    onClick={() => setLinkModal(true)}
                                    className="mr-8"
                                    id="link"
                                >
                                    <img
                                        className="w-12 h-10 cursor-pointer"
                                        src={theme ? linkWhiteImage : linkBlackImage}
                                    />
                                </div>
                                <div
                                    onClick={() => setIsDeleteGroup(true)}
                                    id="link"
                                >
                                    <img
                                        className="w-9 h-10 cursor-pointer"
                                        src={theme ? deleteWhiteImage : deleteBlackImage}
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                style={{ color: theme ? '#ffffff' : '#000000', backgroundColor: theme ? '#0a0a0a' : '#f5f5f5' }}
                                className={`${isGroup.description ? "" : "opacity-50"} overflow-hidden text-2xl rounded-lg w-[920px] p-8`}
                                placeholder="Description..."
                                value={isGroup.description || ""}
                                onChange={(e) => setCurrentGroup({ ...isGroup, description: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div
                id=""
                className={`mt-14 text-xl grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 w-full px-32`}
            >
                <div
                    id="add-contact-div-wrapper"
                    className="flex justify-center items-start col-span-1"
                    onClick={() => setNewModal(true)}
                >
                    <PreviewContact theme={theme} />
                </div>

                {contact.map((cntct) => {
                    return (
                        <div
                            id="preview-contact-flex-box-div"
                            key={cntct._id}
                            className="flex justify-center items-start col-span-1"
                        >
                            <div
                                id="preview-contact-div-wrapper"
                                onClick={() => setContactModal(cntct)}
                            >
                                <PreviewContact theme={theme} userData={cntct} />
                            </div>
                        </div>
                    );
                })}

                {showNewModal && (
                    <div
                        id="modal-background-new-contact"
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                        onClick={(e) => closeModal(e)}
                    >
                        <NewCard
                            theme={theme}
                            contact={contact}
                            setContact={setContact}
                            setNewModal={setNewModal}
                            onAddContact={handleAddContact}
                            isGroup={isGroup}
                        />
                    </div>
                )}

                {showContactModal && Object.keys(showContactModal).length > 0 && (
                    <div
                        id="modal-background-existing-contact"
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                        onClick={(e) => closeModal(e)}
                    >
                        <div className="flex justify-center">
                            <ContactCard
                                theme={theme}
                                isGroup={isGroup}
                                setContact={setContact}
                                setContactModal={setContactModal}
                                onUpdateContact={handleUpdateContact}
                                onDeleteContact={handleDeleteContact}
                                userData={showContactModal}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainContent;
