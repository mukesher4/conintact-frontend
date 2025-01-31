import { useState } from "react";
import imageCompression from 'browser-image-compression';

const UploadImageButton = ({
	theme,
	edit,
	image,
	setImage
}) => {

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
		<div className={`flex justify-center mb-8`}>
			<label
				className={`flex justify-center items-center w-72 h-72 ${!edit ? 'border-2 border-dashed border-gray-400 hover:bg-gray-100' : 'relative opacity-50'} rounded-lg  cursor-pointer transition-colors duration-200 hover:text-black`}
				htmlFor="file-input"
			>
				{image ? (
					<>
						<img
							src={image}
							alt="Uploaded"
							className={edit ? "rounded-2xl w-72 h-72 object-cover" : "w-full h-full object-cover rounded-lg"}
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
					<span
				    style={{ color: theme ? '#ffffff' : '#000000' }}
					className="text-4xl font-bold transition-colors duration-100">+</span>
				)}
			</label>

			<input
				id="file-input"
				type="file"
				accept="image/*"
				className="hidden"
				onChange={handleImageUpload}
			/>
		</div>
	);
};

export default UploadImageButton;
