const CustomButton = ({
	theme,
	value,
	handleClick=null,
}) => {
	return (
		<button
		onClick={handleClick}
		style={{
			backgroundColor: theme ? "#0A0A0A" : "#FEFAFA",
			border: '2px solid rgba(20, 20, 20, 0.1)'
		}}
		className="transition-all duration-300 hover:bg-[#1f1f1f] flex items-center justify-center text-[25px] w-[150px] h-[60px]  "
		>
			<span
			style={{ color: theme ? '#ffffff' : '#000000' }}
			>
			{value}
			</span>
		</button>
	);
};

export default CustomButton;