import React from 'react';

const Header = ({
	navigate,
	theme,
	setTheme,
	CustomButton,
	icon
}) => {
	const handleLogin = (e) => {
		e.preventDefault();
		navigate("/Login");
	};

	const handleSignup = (e) => {
		e.preventDefault();
		navigate("/Signup");
	};

	const handleTheme = (e) => {
		e.preventDefault();
		setTheme((prevVal) => !prevVal);
		console.log(theme);
	};

	return (
		<div className="z-30 fixed top-0 w-full">
			<header
				style={{ backgroundColor: theme ? '#000000' : '#FEFAFA' }}
				className="transition-all duration-300 fixed inset-x-0 top-0 z-50 flex h-[120px] items-center justify-between px-12 shadow-md"
			>
				<div id="home-icon" className="cursor-pointer flex items-center">
					<img className="h-14 w-14" src={icon} alt="Logo" />
					<span
						style={{ color: theme ? '#ffffff' : '#000000' }}
						className="ml-6 text-6xl"
					>
						ConIntact
					</span>
				</div>
				<nav className="hidden md:flex items-center space-x-8">
					<button
						onClick={handleTheme}
						style={{
							backgroundColor: theme ? "#0A0A0A" : "#FEFAFA",
							border: '2px solid rgba(20, 20, 20, 0.1)'
						}}
						className="transition-all duration-300 hover:bg-[#1f1f1f] flex items-center justify-center font-kanit text-[25px] w-[60px] h-[60px] rounded-full"
					>
						<span
							style={{ color: theme ? '#ffffff' : '#000000' }}
							className="text-3xl"
						>
							{theme ? '🌙' : '☀️'}
						</span>
					</button>

					<CustomButton
						theme={theme}
						value="Login"
						handleClick={handleLogin}
					/>
					<CustomButton
						theme={theme}
						value="Signup"
						handleClick={handleSignup}
					/>
				</nav>
			</header>
			<div className="w-full border bg-[#141414] top-[120px] left-0 fixed opacity-10"></div>
		</div>
	);
};

export default Header;