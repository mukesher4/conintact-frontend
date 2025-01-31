import { memo } from 'react';

const UnHingedCrossGrid = memo(({
	theme,
	gridCount,
	gapSize,
	gridColor = "bg-[#141414]",
	gridWeight = "1",
	minOverflow = 50,
	maxOverflow = 150,
}) => {
	const getRandomInt = (x, y) => {
		return Math.floor(Math.random() * (y - x) + 1) + x;
	}

	const gridSize = gridCount * gapSize;

	const horizontalLines = Array.from({ length: gridCount + 1 }, (_, i) => {
		const useDifferentColor = Math.random() < 0.5 ? 'bg-[#b8860b] opacity-[15%]' : theme ? gridColor : 'bg-[#bdbdbd]';

		return (
			<div
				key={`horizontal-${i}`}
				className={`opacity-50 absolute left-0 ${useDifferentColor}`}
				style={{
					width: `${gridCount*gapSize+getRandomInt(minOverflow,maxOverflow)}px`,
					height: `${gridWeight}px`,
					top: `${i * gapSize}px`,
					transform: "translateX(-50%)",
					left: "50%"
				}}
			/>
			);
	});

	const verticalLines = Array.from({ length: gridCount + 1 }, (_, i) => {
		const useDifferentColor = Math.random() < 0.5 ? 'bg-[#b8860b] opacity-[15%]' : theme ? gridColor : 'bg-[#bdbdbd]';
		return (
			<div
				key={`vertical-${i}`}
				className={`opacity-50 absolute ${useDifferentColor}`}
				style={{
					width: `${gridWeight}px`,
					height: `${gridCount*gapSize+getRandomInt(minOverflow,maxOverflow)}px`,
					left: `${i * gapSize}px`,
					transform: "translateY(-50%)",
					top: "50%"
				}}
			/>
		);
	});

	return (
		<div
			className="transition-all duration-300 relative"
			style={{ width: `${gridSize}px`, height: `${gridSize}px` }}
		>
			{horizontalLines}
			{verticalLines}
		</div>
	);
});

export default UnHingedCrossGrid;