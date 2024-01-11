import { useState } from 'react';
import Polygon from '../assets/public/Polygon.png';

const Header = () => {
	const [activeSection, setActiveSection] = useState('Home');
	const getImagePosition = (activeSection) => {
		switch (activeSection) {
			case 'Home':
				return 'left-[0]';
			case 'Movies':
				return 'left-[4.25rem]';
			case 'Artists':
				return 'left-[9.2rem]';
			default:
				return 'left-0';
		}
	};

	return (
		<header className=' overflow-hidden relative flex w-full items-stretch w-full'>
			<div className='relative bg-black flex w-full flex-col justify-center items-center px-4 py-8 w-full'>
				<div className='flex w-full items-start justify-between gap-5 px-6'>
					<div className='text-2xl font-medium leading-8 self-stretch grow whitespace-nowrap text-left'>
						<span className='text-orange-500'>CitrusCinema</span>
						<span className='spin text-4xl'>&#127818;</span>
					</div>
					<div className='self-center flex items-center gap-2 my-auto mx-2 relative'>
						<img
							loading='lazy'
							src={Polygon}
							className={`absolute object-contain object-center w-2 max-w-full transition-all duration-300 ${getImagePosition(
								activeSection
							)}`}
							style={{ top: '50%', transform: 'translateY(-50%)' }}
						/>
						<div
							className='flex relative text-white text-base font-semibold mx-2 nowrap cursor-pointer'
							onClick={() => setActiveSection('Home')}
						>
							Home
						</div>
						<div
							className='flex text-white text-base font-semibold mx-2 nowrap cursor-pointer'
							onClick={() => setActiveSection('Movies')}
						>
							Movies
						</div>
						<div
							className='flex text-white text-base font-semibold mx-2 nowrap cursor-pointer'
							onClick={() => setActiveSection('Artists')}
						>
							Artists
						</div>
					</div>

					<div className='self-center flex items-start justify-between gap-2 my-auto'>
						<div className='self-center flex items-stretch gap-1.5 my-auto'>
							<div className='text-gray-200 text-base font-medium grow whitespace-nowrap'>
								My list
							</div>
							<img
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/60db0d062936e8bb27a58a723781d762ea1f013224e239bbc50cda4fe8a16bd7?'
								className='aspect-[1.71] object-contain object-center w-3 stroke-[1.8px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto'
							/>
						</div>
						<img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/0d5139f3c71e756a93a477b71e55b67c7c2b6a61923cac7d580cd1b99e592fba?'
							className='aspect-square object-contain object-center w-[18px] fill-white overflow-hidden shrink-0 max-w-full self-start'
						/>
						<img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/ce7152e6ca695955df27a989658851662ba6f21ee1ad352592828771e3901dba?'
							className='aspect-square object-contain object-center w-5 stroke-[2px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full'
						/>
						<img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/d4b44135d9c3b8927247ff63692192d0799d37488ab840f6bfd645aa80533011?'
							className='aspect-square object-contain object-center w-5 fill-white overflow-hidden self-stretch shrink-0 max-w-full'
						/>
						<div className='text-white text-xs font-semibold self-center my-auto'>
							ENG
						</div>
						<img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/55b7e95f0df5a794796d6c7060bdc36b3b0ad82b7eff88be2897a2b87f120720?'
							className='aspect-[1.67] object-contain object-center w-2.5 stroke-[1.5px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto'
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
