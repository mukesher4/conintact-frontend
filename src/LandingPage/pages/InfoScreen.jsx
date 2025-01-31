const InfoScreen = ({
	theme,
	invite,
	collab,
	rect,
}) => {
	return (
		<div
			style={{ backgroundColor: theme ? '#000000' : '#ffffff' }}
			className="transition-all duration-300 mx-auto w-full flex flex-row justify-center"
		>
			<div
				style={{ borderColor: theme ? '#161616' : '#eeeeee' }}
				className="h-[1328px] w-[1px] mt-48 border"
			></div>
			<div className="w-4/5">
				<div 
					style={{ borderColor: theme ? '#161616' : '#eeeeee' }}
					className="mt-48 border"
				></div>
				<div
					className="p-16 whitespace-normal w-full gap-12 items-center flex flex-col justify-center mt-18 text-center text-5xl"
				>
					<div
						style={{ color: theme ? '#ffffff' : '#000000' }}
						className="max-w-full"
					>
						Tired of sharing contacts one by one for every occasion<span className="text-[#d4af37]">?</span>
					</div>
					<div
						style={{ color: theme ? '#ffffff' : '#000000' }}
						className="max-w-full"
					>
						Simplify it with <span className="text-[#d4af37]">ConIntact</span>—create a group, share once, and
						<br />
						you're done.
					</div>
				</div>
				<div 
					style={{ borderColor: theme ? '#161616' : '#eeeeee' }}
					className="mx-auto mt-18 border"
				></div>
				<div 
					style={{ borderColor: theme ? '#161616' : '#eeeeee' }}
					className="mx-auto mt-20 border"
				></div>
				<div className="w-full flex flex-row justify-center">
					<div
						style={{ color: theme ? '#ffffff' : '#000000' }}
						className="flex flex-col gap-28 text-4xl w-1/2 text-left text-center p-16"
					>
						<div>
							<span className="text-[#d4af37]">#Invite</span>
							<br />
							Invite with a Click. Connect Instantly.
						</div>
						<div className="flex justify-center">
							<video
								autoPlay
								loop
								muted
								className="rounded-lg w-[600px] h-[600px] object-cover"
							>
								<source src={invite} type="video/mp4" />
							</video>
						</div>
					</div>
					<div
						style={{ borderColor: theme ? '#161616' : '#eeeeee' }}
						className="h-[920px] w-[1px] border"
					></div>
					<div
						style={{ color: theme ? '#ffffff' : '#000000' }}
						className="flex flex-col gap-[4.5rem] text-4xl w-1/2 text-left p-16"
					>
						<div>
							<span className="text-[#d4af37]">#Collab</span>
							<br />
							One link, instant access. 
							<br />
							Joining groups has never been easier.
						</div>
						<div className="flex justify-center">
							<video
								autoPlay
								loop
								muted
								className="rounded-lg w-[600px] h-[600px] object-cover"
							>
								<source src={collab} type="video/mp4" />
							</video>
						</div>
					</div>					
				</div>
				<div 
					style={{ borderColor: theme ? '#161616' : '#eeeeee' }}
					className=" w-full mb-36 border"
				></div>
			</div>
			<div
				style={{ borderColor: theme ? '#161616' : '#eeeeee' }}
				className="h-[1328px] w-[1px] mt-48 border"
			></div>
		</div>
	);
};
export default InfoScreen;