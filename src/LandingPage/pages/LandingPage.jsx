// HomeScreen
import HomeScreen from './HomeScreen';
import images from '../assets/images';

// Header
import Header from '../components/Header/Header';
import CustomButton from '../components/ui/CustomButton';
import icon from '../assets/icon';

// ContactSlide
import UnHingedCrossGrid from '../components/ui/UnHingedCrossGrid';
import ContactCard from '../components/ContactSlide/PrevContactCard';
import contacts from '../assets/contacts';
import ContactSlide from '../components/ContactSlide/ContactSlide';

// InfoScreen
import InfoScreen from './InfoScreen';
import rect from '../assets/rect.png'
import invite from '../assets/invite.mp4'
import collab from '../assets/collab.mp4'

// Footer
import Footer from './Footer';

import { useState } from 'react';

const LandingPage = ({ navigate }) => {
	const [theme, setTheme] = useState(true);

	return (
		<div className="overflow-x-hidden flex flex-col h-screen w-screen">
			<Header
			navigate={navigate}
			theme={theme}
			setTheme={setTheme}
			CustomButton={CustomButton}
			icon={icon}
			/>
			<HomeScreen
			theme={theme}
			images={images}
			UnHingedCrossGrid={UnHingedCrossGrid}
			ContactCard={ContactCard}
			contacts={contacts}
			ContactSlide={ContactSlide}
			/>
			<InfoScreen
			theme={theme}
			rect={rect}
			invite={invite}
			collab={collab}
			/>
			<Footer
			theme={theme}
			/>
		</div>
	);
};

export default LandingPage;