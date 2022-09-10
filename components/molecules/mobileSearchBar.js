import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { typeLocation } from '../../state/actions/dataActions';
import ClearButton from '../atoms/clearButton';
import MobileNavigation from '../atoms/mobileNavigation';
import MobileSearchOption from '../atoms/mobileSearchOption';
import NearbySection from '../atoms/nearbyCard';

const MobileSearchBar = ({searchPage,exploreNearby}) => {
	
	const [activeSearch, setActiveSearch] = useState(false);
	const [activeStep, setActiveStep] = useState(false);
	const {location} = useSelector(state => state.data);
	const dispatch = useDispatch();

	const handleSectionClick = (event) => {
		const id = event.target.id;
		if(id === 'close') setActiveSearch(false);
	};

	return (
		<>
			<div className='container block w-full md:hidden'>
				<div className='relative flex items-center justify-center h-12 rounded-full bg-gray-100'>
					{
						searchPage && (
							<Link href= "/">
								<a className='absolute bg-white rounded-full shadow-md left-1 p-2 duration-300 active:scale-90'>
									<ChevronLeftIcon className="h-5"/>
								</a>
							</Link>
						)
					}

					<button 
						className='flex items-center justify-center w-full h-full mx-11'
						onClick={() => setActiveSearch(true)}
						>
						<SearchIcon className="h-5 mr-1 text-primary" />
						<span className="text-sm font-medium tracking-wide">
              Where are you going?
            </span>
					</button>
				</div>
			</div>

			<section
				id='close'
				className={`z-50 fixed inset-0 bg-white rounded-t-3xl px-4 ${
					activeSearch ? 'block' : 'hidden'
				}`}
				onClick={handleSectionClick}
			>
				<form 
					action=""
					className='flex items-center h-12 mt-4'
					onSubmit={(event) => {
						event.preventDefault();
						setActiveSearch(false);
						setTimeout(() => {
							setActiveStep(true);
						}, 200);
					}}
				>
					<span 
						className="p-1 mr-4"
						onClick={() => setActiveSearch(false)} 
					>
						<ChevronLeftIcon className="h-6"/>
					</span>
					<input 
						className="flex-grow mr-4 placeholder-gray-300"
						type="text" 
						placeholder="Where are you going?"
						value={location}
						onChange={(event) => {
							dispatch(typeLocation(event.target.value));
						}}
					/>

					<ClearButton
						active={location}
						onClick={() => dispatch(typeLocation(''))}
					/>
				</form>

				<div className="mt-6">
					<h2 className="mb-4 text-xs font-bold">GO ANYWHERE, ANYTIME</h2>
					<button className='flex justify-between w-full px-6 py-4 border border-gray-200 rounded-full shadow-md text-primary'>
						<span className="font-bold">Explore Now</span>
						<ChevronRightIcon className="h-6"/>
					</button>
				</div>

				<div className="mt-6">
					<h2 className="mb-4 text-xs font-bold">PLACES NEAR YOU</h2>
					{ exploreNearby.slice(0,4).map((data,index) => (
						<NearbySection key={index} data={data} isSmall />
					))}
				</div>

			</section>

			<MobileSearchOption 
				active={activeStep}
				onClose={() => {
					setActiveSearch(false);
					setActiveStep(false);
				}}
			/>

			<MobileNavigation />
		</>
	)
}

export default MobileSearchBar
