const CustomButton2 = ({
	id=null,
	theme,
	value,
	handleClick=null,
	size="rg",
}) => {
	return (
		<button
		onClick={handleClick}
		style={{
			backgroundColor: theme ? "#121212" : "#FEFAFA",
			border: '2px solid rgba(20, 20, 20, 0.1)'
		}}
		className={`transition-all duration-300 hover:bg-[#1f1f1f] flex items-center justify-center ${size==="rg" ?  `w-[140px] h-[50px] text-[25px]` :  size==="sm" ? `w-[100px] h-[40px] text-[20px]` : ``} `}
		>
			<span
			style={{ color: theme ? '#ffffff' : '#000000' }}
			>
			{value}
			</span>
		</button>		
	);
};

export default CustomButton2;