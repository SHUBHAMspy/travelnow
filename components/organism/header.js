import { MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { formatGuests } from '../../utils/guestUtils';
import HeaderOption from '../atoms/headerOption';
import MobileSearchBar from '../molecules/mobileSearchBar';
import SearchBar from '../molecules/searchBar';

export const headerOptions = {
		PLACES_TO_STAY: "placesToStay",
		FIND_EXPERIENCES: "findExperiences"
}

const Header = ({exploreNearby = [],searchPage,query}) => {
		const [isSnapTop, setisSnapTop] = useState(searchPage?false:true);
		const [isActiveSearch, setIsActiveSearch] = useState(searchPage?false:true);
		const [activeHeaderMenu, setactiveHeaderMenu] = useState(headerOptions.PLACES_TO_STAY)

		const handleOnScroll = () => {
				const scrollPosition = window.scrollY;
				if (scrollPosition >= 50) {
						setisSnapTop(false);
						setIsActiveSearch(false);
				}else{
						setisSnapTop(true);
						setIsActiveSearch(true);
				}
		}
		const headerBehaviour = () => {
				let style = [];
				if(!isSnapTop) style.push('bg-white shadow-lg');
				if(!isActiveSearch) style.push('h-[86px] pb-5');
				if(isActiveSearch) style.push(' pb-8');
				return style.join(' ');
		}

		useEffect(() => {
				if (!searchPage) {
						window.addEventListener('scroll',handleOnScroll);
				}
				return () => {
						window.removeEventListener('scroll',handleOnScroll);
				}
		}, [searchPage])

	return (
		<>
			<header className={`${headerBehaviour()} z-50 fixed top-0 w-full pt-5 duration-300 md:transition-none`}>
				<div className={`${
					searchPage ? 'px-10' : 'container'
					} hidden md:grid md:grid-cols-[auto,1fr,auto] xl:grid-cols-[1.5fr,3fr,1.5fr] 2xl:grid-cols-[1fr,3fr,1fr] items-start`}>
					
					{/* App Logo */}
					<div className='relative flex items-center h-12 text-sm md:text-xl lg:text-2xl font-black text-primary animate-bounce'>
						<Link href="/">
							<a >
									TravelNow
							</a>
						</Link> 
					</div>

					<button className= {`${
							isActiveSearch && 'scale-[1.33] translate-y-[75px] opacity-0 z-[0]'
						} ${
							searchPage ? 'pl-3' : 'pl-6'
						} relative flex items-center h-12 pr-2 mx-auto text-left transform bg-white border border-gray-200  rounded-full shadow-md cursor-pointer min-w-[320px] hover:shadow-lg md:absolute left-44 lg:left-auto lg:right-1/2 lg:translate-x-1/2 duration-200`}
					onClick={() => setIsActiveSearch(true)}
					>
						{searchPage ? (
							<span className="flex-grow text-sm font-medium tracking-wide text-gray-500">
									<span className="px-4 py-1 border-r border-gay-200">
										{query.location || (
												<span className="font-normal text-gray-300">Location</span>
										)}
									</span>
									<span className="px-4 py-1 border-r border-gay-200">
										{ query.category || (
												<span className="font-normal text-gray-300">Choose Category</span>
										)}
									</span>
									<span className="px-4 py-1">
										{ formatGuests(JSON.parse(query.guests.toString()), { noInfants: true }) || (
												<span className="font-normal text-gray-300">Add guests</span>
										)}
									</span>
							</span>
						) :(

							<span className='grow text-sm font-medium tracking-wide text-gray-500'>
									Start your search
							</span>

					)}
							<SearchIcon className="h-8 p-2 ml-3 text-white rounded-full bg-primary"/>

					</button>
					<div className='relative flex flex-col items-center justify-center order-last col-span-2 xl:order-none xl:col-span-1'>
						<div className='text-white'>
							<HeaderOption 
								isSnap={isSnapTop}
								isActiveHeader={isActiveSearch}
								active={activeHeaderMenu === headerOptions.PLACES_TO_STAY}
								onClick={() => setactiveHeaderMenu(headerOptions.PLACES_TO_STAY)}
								
								>
									Places to stay
							</HeaderOption>

							<HeaderOption 
								isSnap={isSnapTop}
								isActiveHeader={isActiveSearch}
								active={activeHeaderMenu === headerOptions.FIND_EXPERIENCES}
								onClick={() => setactiveHeaderMenu(headerOptions.FIND_EXPERIENCES)}
								>
									Experiences
							</HeaderOption>

							<HeaderOption 
								isSnap={isSnapTop}
								isActiveHeader={isActiveSearch}
								>
									<Link href="/">
										<a>Online Experiences</a>
									</Link>
							</HeaderOption>

						</div>
					</div>
					<div className="flex items-center justify-end">
						<button className='flex items-center pl-3 pr-1 bg-white border border-gray-200 rounded-full h-11 hover:shadow-md'>
							<MenuIcon className="h-5 mr-2 text-gray-300"/>
							<UserCircleIcon className="h-10 text-gray-300"/>
						</button>
					</div>
				</div>

				<SearchBar 
					menu={activeHeaderMenu}
					isActiveHeader={isActiveSearch}
					searchPage={searchPage}
					closeSearch={() => setIsActiveSearch(false)}
				/>

				<MobileSearchBar
					searchPage={searchPage}
					exploreNearby={exploreNearby }
				/>
					
			</header>

			{isActiveSearch && !isSnapTop && (
				<div
					className='fixed inset-0 z-40 bg-transparent-black'
					onClick={() => setIsActiveSearch(false)}
				/>
			)}
		</>
	)
}

export default Header
