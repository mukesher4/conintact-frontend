const SessionExpired = ({
	CustomButton2,
	theme,
	navigate
}) => {
	return (
		<div className="w-full fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-70">

			<div
	        style={{
	        	backgroundColor: theme ? `#121212` : `#eeeeee`,
                color: theme ? '#ffffff' : '#000000',
	         }}
			className=" p-8 w-64 p-6 rounded-lg flex flex-col items-center z-100 relative">
				<p className="mb-6 text-xl font-semibold">Session Has Expired</p>
				<CustomButton2
					theme={!theme}
					size={"sm"}
					handleClick={() => navigate('/Login')}
					value={"Login"}
				/>
					
			</div>
		</div>
	);
};

export default SessionExpired;
