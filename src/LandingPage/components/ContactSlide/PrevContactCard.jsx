const ContactCard = ({
	theme,
	images,
	userData
}) => {
	// Form Inputs
	const fields = [
		{ 
			label: 'Phone',
			type: 'tel',
			required: true,
			value: userData?.phone || ""
		},
		{ 
			label: 'Email',
			type: 'email',
			required: false,
			value: userData?.email || ""
		},
	];
	
	// Additional Form Inputs
	const additionalFields = [
		{ 
			label: 'Note',
			type: 'text',
			required: false,
			value: userData?.note || ""
		},
	];

	return (
		<div
        style={{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }}
		className="transition-all duration-300 rounded-lg p-4 shadow-lg overflow-hidden">
			<div id="contact-header-render" className="overflow-hidden w-64 mb-4 flex items-center">
				<div id="contact-name-div-wrapper" className="flex justify-center items-center px-2 w-full">
					<h2
                    style={{ color: theme ? '#ffffff' : '#000000' }}
					className="text-3xl font-regular truncate">{userData?.name}</h2>
				</div>
			</div>

			<div id="render-update-image" className="flex justify-center">
				<img className="object-cover rounded-2xl mb-8 w-56 h-56" src={userData?.image || images.anon} />
			</div>

			<form id="form">
				{fields.map((field, index) => (
					<div key={index} className="mb-2">
						<input
						style={{ 
						color: theme ? '#ffffff' : '#000000',
						backgroundColor: theme ? `#121212` : `#eeeeee`,
						borderColor: theme ? '#2E3138' : '#D1CEC7',
						}}
						type={field.type}
						className="text-lg w-full p-2 rounded-lg"
						value={field.value}
						required={field.required}
						placeholder={field.label}
						readOnly
						/>
					</div>
				))}
				{additionalFields.map((field, index) =>
					field.value !== "" ? (
						<div key={index} className="mb-0">
							<textarea
                    		style={{ 
                    			color: theme ? '#ffffff' : '#000000',
                    			backgroundColor: theme ? `#121212` : `#eeeeee`,
                    			borderColor: theme ? '#2E3138' : '#D1CEC7',
                    		}}
							rows="1"
							className="w-full p-2 rounded-lg resize-none bg-[#121212]"
							value={field.value}
							required={field.required}
							readOnly
							/>
						</div>
					) : null
				)}
			</form>
		</div>
	);
};

export default ContactCard;