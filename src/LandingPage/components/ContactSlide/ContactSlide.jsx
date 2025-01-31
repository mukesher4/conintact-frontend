import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 

const ContactSlide = ({
	theme,
	images,
	UnHingedCrossGrid,
	ContactCard,
	contacts,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const intervalRef = useRef(null); 

	const startInterval = () => {
		intervalRef.current = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % contacts.length);
		}, 4000); 
	};

	const clearIntervalRef = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};

	useEffect(() => {
		startInterval();
		return () => clearIntervalRef(); 
	}, []);

	const handleMouseEnter = () => {
		setIsHovered(true);
		clearIntervalRef(); 
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % contacts.length);
		startInterval(); 
	};

	const gridProps = useMemo(() => ({
		gapSize: 52,
		gridCount: 9,
		minOverflow: 200,
		maxOverflow: 400,
	}), []);

	const cardVariants = {
		initial: { x: '-100%', opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: '100%', opacity: 0 },
	};

	return (
		<div className="relative flex items-center justify-center w-full h-[500px]">
			<div className="absolute">
				<UnHingedCrossGrid
				theme={theme}
				{...gridProps}
				/>
			</div>
			<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="h-full relative z-10 overflow-hidden"
			>
				<AnimatePresence mode="wait">
					<motion.div
					key={currentIndex}
					variants={cardVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<ContactCard
						theme={theme}
						images={images}
						userData={contacts[currentIndex]} />
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ContactSlide;