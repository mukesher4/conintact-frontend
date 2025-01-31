import { useState } from 'react';
import UploadImageButton from './UploadImageButton';
import NewAddFields from './NewAddFields';

import CustomButton2 from './ui/CustomButton2';

const AddContactForm = ({
	theme,
	setContact,
	setNewModal,
	contact,
	isGroup,
	onAddContact,
}) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneno, setPhoneno] = useState('');
	const [phoneCode, setPhoneCode] = useState('+91');
	const [image, setImage] = useState('');
	const [note, setNote] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		onAddContact(
			setContact,
			setNewModal,
			contact,
			isGroup, 
			{
				name,
				email,
				phone: phoneCode + ' ' + phoneno,
				image,
				note 
			}
		);
	};

	const fields = [
		{ 
			label: 'Name',
			type: 'text',
			value: name,
			required: true,
			setValue: setName,
			dropDown: false },
		{ 
			label: 'Phone',
			type: 'tel',
			value: phoneno,
			required: true,
			setValue: setPhoneno,
			dropDown: true },
		{ 
			label: 'Email',
			type: 'email',
			value: email,
			required: false,
			setValue: setEmail,
			dropDown: false },
	];

	return (
		<form onSubmit={handleSubmit}>
			<UploadImageButton theme={theme} image={image} setImage={setImage} />
			{fields.map((field, index) => (
				<div key={index} className="mt-4">
					{field.dropDown ? (
						<div className="flex justify-center gap-2">
					      <input
                        	style={{
                        		color: theme ? '#ffffff' : '#000000',
                        		backgroundColor: theme ? `#121212` : `#eeeeee`
                        	}} 
					      	type="text"
					        onChange={(e)=>{setPhoneCode(e.target.value)}}
					        value={phoneCode}
					        className="text-[#d4a017] w-1/4 px-2 rounded-lg "
					      	placeholder={field.label}
					      />
							
							<input
                            	style={{
                            		color: theme ? '#ffffff' : '#000000',
                            		backgroundColor: theme ? `#121212` : `#eeeeee`
                            	}} 
								type={field.type}
								className="w-full p-2 rounded-lg"
								value={field.value}
								onChange={(e)=>{field.setValue(e.target.value)}}
								required={field.required}
					      	placeholder={field.label}

							/>
						</div>
					):(
						<input
                        	style={{
                        		color: theme ? '#ffffff' : '#000000',
                        		backgroundColor: theme ? `#121212` : `#eeeeee`
                        	}} 
							type={field.type}
							className="w-full p-2 rounded-lg"
							value={field.value}
							onChange={(e)=>{field.setValue(e.target.value)}}
					      	placeholder={field.label}
							required={field.required}
						/>
					)}
				</div>
			))}
			<div className="mt-4">
				<NewAddFields theme={theme} note={note} setNote={setNote}/>
				<div className="mt-6 flex justify-center">
					<CustomButton2 theme={theme} value={"Add"} />
				</div>
			</div>
		</form>
	);
};

export default AddContactForm;