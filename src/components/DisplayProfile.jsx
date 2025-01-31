import { useState, useEffect } from "react";
import imageCompression from 'browser-image-compression';
import anon from '../assets/anon';

const DisplayProfile = ({ theme, edit, image, setImage }) => {

	const handleImageUpload = async (e) => {
	  const file = e.target.files[0];

	  if (file) {
	    const options = {
	      maxSizeMB: 0.1, 
	      maxWidthOrHeight: 500,
	      useWebWorker: true,
	    };

	    try {
	      const compressedFile = await imageCompression(file, options);
	      const base64Image = await imageCompression.getDataUrlFromFile(compressedFile);
	      setImage(base64Image);
	    } catch (error) {
	      console.error('Error compressing the image:', error);
	    }
	  }
	};

	return (
		<div className={`flex justify-center mb-4`}>
			<label
				className={`mt-4 flex justify-center items-center w-32 h-32 ${edit ? ' cursor-pointer relative opacity-50' : ''} rounded-full transition-colors duration-200 hover:text-black`}
				htmlFor="file-input"
			>
				{image ? (
					<>
						<img
							src={image}
							alt="Uploaded"
							className={edit ? "rounded-full w-32 h-32 object-cover" : "w-full h-full object-cover rounded-full"}
						/>
						{edit && (
						  <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
						    <span
					          style={{ color: theme ? '#ffffff' : '#000000' }}
						    className="text-4xl text-white">+</span> 
						  </div>
						)}
					</>	
				) : (
					<span className="text-4xl font-bold transition-colors duration-100">+</span>
				)}
			</label>

			{edit && (
			<input
				id="file-input"
				type="file"
				accept="image/*"
				className="hidden"
				onChange={handleImageUpload}
			/>
				)}
		</div>
	);
};

export default DisplayProfile;
