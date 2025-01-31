import Searchbar from './Searchbar';
import UserSettings from './UserSettings';

const Navbar = ({
	theme, 
	setTheme,
	currentUser,
	setCurrentUser,
	searchQuery,
	setSearchQuery
}) => {	
	const handleTheme = (e) => {
		e.preventDefault();
		setTheme((prevVal) => !prevVal);
		console.log(theme);
	};

	return (
		<>
			<div
			style={{ backgroundColor: theme ? '#000000' : '#ffffff' }}
			className="shadow-md tranistion-all duration-300 flex justify-between items-center text-xl fixed top-0 left-0 w-full p-6 z-10">
				<div className="flex-grow flex justify-center max-w-full ml-[550px]">
					<Searchbar theme={theme} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
				</div>
				<button
					onClick={handleTheme}
					style={{
						backgroundColor: theme ? "#0A0A0A" : "#FEFAFA",
						border: '2px solid rgba(20, 20, 20, 0.1)'
					}}
					className="transition-all duration-300 hover:bg-[#1f1f1f] flex items-center justify-center font-kanit text-[25px] w-[60px] h-[60px] rounded-full mr-8"
				>
					<span
						style={{ color: theme ? '#ffffff' : '#000000' }}
						className="text-3xl"
					>
						{theme ? '🌙' : '☀️'}
					</span>
				</button>
				<div className="flex items-center ml-4">
					<UserSettings theme={theme} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</div>
				<div className="w-full border bg-[#141414] top-[117px] left-0 fixed opacity-10"></div>

			</div>
		</>
	);
};

export default Navbar;
