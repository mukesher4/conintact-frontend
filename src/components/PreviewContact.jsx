import anon from '../assets/anon';

const PreviewContact = ({
	theme,
	userData = null,
}) => {
	return (
		<div
		style={{ backgroundColor: theme ? '#0a0a0a' : '#F5F5F5' }}
		className="overflow-hidden rounded-xl shadow-md transition-all duration-300">
			{userData ? (
				<div className="flex justify-center items-center h-112 w-72 transition-transform hover:scale-105 cursor-pointer">
	  				<div>
	  					{userData.image ? (
		  					<img 
		  						src={userData.image} 
								className="object-cover w-44 h-44 rounded-full mx-auto mb-12"
		  					/>	  						
  						) : (
							<img 
			  					src={anon} 
								className="object-cover w-44 h-44 rounded-full mx-auto mb-12"
		  					/>
	  						)}
	  					<h3
						style={{ color: theme ? '#ffffff' : '#000000' }}
						className="text-2xl font-normal text-zinc-300"
	  					>{userData.name}</h3>
	  					<p
						style={{ color: theme ? '#ffffff' : '#000000' }}
	  					>{userData.phone}</p>
	  				</div>
				</div>
				) : (
				<div className="flex justify-center items-center h-112 w-72 border-2 border-dashed border-gray-400 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors duration-200 hover:text-black">
				  <span
	  				style={{ color: theme ? '#ffffff' : '#000000' }}
				  className="text-4xl font-bold transition-colors duration-100">
				    +
				  </span>
				</div>

			)}
		</div>
	);
};

export default PreviewContact;