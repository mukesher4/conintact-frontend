import AddContactForm from './AddContactForm';

const NewCard = ({ 
	theme,
	isGroup,
	contact,
	setContact,
	setNewModal,
	onAddContact }) => {
	return (
		<div
		id="modal"
        style={{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }}
		className="mt-4 rounded-lg p-6 shadow-lg max-w-sm w-full">		
			{/*Title*/}
			<h2
			style={{ color: theme ? '#ffffff' : '#000000' }}
			className="text-2xl font-bold mb-4">Add New Contact</h2>
			
			{/*Contact Form*/}
			<AddContactForm
				theme={theme}
				setContact={setContact}
				setNewModal={setNewModal}
				contact={contact}
				isGroup={isGroup}
				onAddContact={onAddContact} />
		</div>
	);
};

export default NewCard;