const HomeScreen = ({
	theme,
	images,
	ContactSlide,
	UnHingedCrossGrid,
	ContactCard,
	contacts,
}) => {
	return (
		<div
			style={{ backgroundColor: theme ? '#000000' : '#ffffff' }}
			className="min-h-screen transition-all duration-300 pt-[50px]"
		>
			<div
			className="px-32 mt-64 w-screen left-0 inset-x-0 flex flex-row justify-between"
			>
				<span
				style={{ color: theme ? '#ffffff' : '#000000' }}
				className="h-full text-left items-center w-1/2 text-[60px] leading-relaxed"
				>
					<span className="text-[#d4af37]">Effortless</span>
					<br />
					Contact Sharing.
					<br />
					<span className="text-[#d4af37]">Seamless</span>
					<br />
					Collaboration.
				</span>
				<div className="hidden lg:flex mr-32">
					<ContactSlide
					theme={theme}
					images={images}
					UnHingedCrossGrid={UnHingedCrossGrid}
					ContactCard={ContactCard}
					contacts={contacts}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;