import { useState, useEffect, useRef } from 'react';

import UploadImageButton from './UploadImageButton';
import AddFields from './AddFields';

import anon from '../assets/anon';

const ContactCard = ({
    theme,
    isGroup,
    setContact, 
    setContactModal, 
    onUpdateContact,
    onDeleteContact,
    userData
}) => {
    const dropdownRef = useRef(null);
    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.phone);
    const [image, setImage] = useState(userData.image ? userData.image : anon);
    const [note, setNote] = useState(userData.note ? userData.note : "");
    const [tempNote, setTempNote] = useState(note);
    const [edit, setEdit] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const fields = [
        { 
            label: 'Phone',
            type: 'tel',
            required: true,
            state: phone,
            setter: setPhone 
        },
        { 
            label: 'Email',
            type: 'email',
            required: false,
            state: email,
            setter: setEmail 
        },
    ];

    const additionalFields = [
        { 
            label: 'Note',
            type: 'text',
            required: false,
            state: note,
            setter: setNote 
        },
    ];

    const handleDelete = (e) => {
        e.preventDefault();
        onDeleteContact(setContact, setContactModal, isGroup, userData._id);
    };

    const handleUpdate = (e) => {
        if (edit) {
            setNote(tempNote);
            onUpdateContact(
                setContact,
                isGroup,
                {
                    ...userData, 
                    name,
                    email,
                    phone,
                    image,
                    note: tempNote,
                }
            );
            setEdit(!edit);
        }
        setDropdownVisible(false); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            id="modal"
            style={{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }}
            className="mt-16 rounded-lg p-6 max-w-sm w-full shadow-lg transition-colors duration-300"
        >
            <div id="contact-header-render" className="mb-4 flex items-center">
                <div
                    style={{ color: theme ? '#ffffff' : '#000000' }}
                    id="contact-name-div-wrapper"
                    className="ml-4 transition-colors duration-300"
                >
                    {edit ? (
                        <input
                		style={{ 
	            			backgroundColor: theme ? `#121212` : `#eeeeee`,
	            			borderColor: theme ? '#2E3138' : '#D1CEC7',
	            		}}
                        type="text"
                        className="w-full p-2 rounded-lg text-2xl bg-transparent border border-custom-dark  transition-colors duration-300"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                        />
                    ) : (
                        <h2 className="text-3xl font-bold">{name}</h2>
                    )}
                </div>

                <div id="dropdown-icon-render" className="relative ml-auto"> 
                    {edit ? (
                        <button
                            className="focus:outline-none bg-transparent text-[#d4a017] transition-colors duration-300"
                            onClick={handleUpdate}
                        >
                            ✔
                        </button>
                    ) : (
                        <button
                            data-ignore="dropdown-button"
                            className="focus:outline-none bg-transparent text-[#d4a017] transition-colors duration-300"
                            onClick={(e) => {
                                e.stopPropagation(); 
                                setDropdownVisible((visible) => !visible); 
                            }}
                        >
                            <span className="text-[#d4a017]">...</span>
                        </button>
                    )}    

                    {dropdownVisible && !edit && (
                        <div
                            id="dropdown-render"
                            ref={dropdownRef}
                            style={{ backgroundColor: theme ? '#121212' : '#eeeeee' }}
                            className="absolute right-0 mt-2 w-32 overflow-hidden rounded-md shadow-sm transition-colors duration-300"
                        >
                            <button
                            	style={{ backgroundColor: theme ? '#121212' : '#eeeeee' }}
                                className="hover:bg-custom-night-hover w-full text-left text-base text-gray-300 px-4 py-2 transition-colors duration-300"
                                onClick={() => {
                                    setEdit(true);
                                    setDropdownVisible(false);
                                }}
                            >
                        	<span
                            style={{ color: theme ? '#ffffff' : '#000000' }}
                        	>
                            	Edit
                        	</span>
                            </button>
                            
                            <button
                                className="hover:bg-custom-night-hover w-full text-left text-base px-4 py-2 transition-colors duration-300"
                            	style={{ backgroundColor: theme ? '#121212' : '#eeeeee' }}
                                onClick={handleDelete}
                            >
                            	<span
                                style={{ color: theme ? '#ffffff' : '#000000' }}
                            	>
                                	Delete
                            	</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div id="render-update-image" className="flex justify-center">
                {edit ? (
                    <UploadImageButton theme={theme} edit image={image} setImage={setImage} />
                ) : (
                    <img
                        className="object-cover rounded-2xl mb-8 w-72 h-72 transition-opacity duration-300"
                        src={image}
                    />
                )}
            </div>

            <form id="form" onSubmit={handleUpdate}>
                {fields.map((field, index) => (
                    <div key={index} className="mb-4">
                        {edit ? (
                            <input
                        		style={{ 
                        			color: theme ? '#ffffff' : '#000000',
                        			backgroundColor: theme ? `#121212` : `#eeeeee`,
                        			borderColor: theme ? '#2E3138' : '#D1CEC7',
                        		}}
                                type={field.type}
                                className="w-full p-2 rounded-lg bg-transparent border border-custom-dark "
                                value={field.state}
                                onChange={(e) => { field.setter(e.target.value); }}
                                required={field.required}
                                placeholder={field.label}
                            />
                        ) : (
                            <input
                            	style={{
                            		color: theme ? '#ffffff' : '#000000',
                            		backgroundColor: theme ? `#121212` : `#eeeeee`
                            	}}    
                                type={field.type}
                                className="w-full p-2 rounded-lg "
                                value={field.state}
                                required={field.required}
                                placeholder={field.label}
                                readOnly
                            />
                        )}
                    </div>
                ))}
                
                {additionalFields.map((field, index) => (
                    note !== "" ? (
                        <div key={index} className="mb-4">
                            {edit ? (
                                <input
                            		style={{ 
                            			color: theme ? '#ffffff' : '#000000',
                            			backgroundColor: theme ? `#121212` : `#eeeeee`,
                            			borderColor: theme ? '#2E3138' : '#D1CEC7',
                            		}}
                                    type={field.type}
                                    className="w-full p-2 rounded-lg  border"
                                    value={tempNote}
                                    onChange={(e) => { setTempNote(e.target.value); }}
                                    required={field.required}
                                    placeholder={field.label || "Enter value"}
                                />
                            ) : (
                                <textarea
                                	style={{ color: theme ? '#ffffff' : '#000000', minHeight: '40px', backgroundColor: theme ? `#121212` : `#eeeeee` }}
                                    rows="3"
                                    className="w-full p-2 rounded-lg resize-none bg-transparent  "
                                    value={tempNote}
                                    required={field.required}
                                    readOnly
                                />
                            )}
                        </div>
                    ) : null
                ))}

                {edit && (
                    <AddFields editSet={edit} ogNote={note} note={tempNote} setNote={setTempNote} />
                )}
            </form>
        </div>
    );
};

export default ContactCard;