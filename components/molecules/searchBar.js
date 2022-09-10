import { ChevronRightIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCategory, decreaseAdults, decreaseChildren, decreaseInfants, increaseAdults, increaseChildren, increaseInfants, resetCategory, resetGuests, typeLocation } from '../../state/actions/dataActions';
import { formatGuests } from '../../utils/guestUtils';
import Counter from '../atoms/counter';
import SearchOptionButton from '../atoms/searchOptionButton';
import SearchOptionWrapper from '../atoms/searchOptionWrapper';
import { headerOptions } from '../organism/header';

export const searchMenuOptions = {
	LOCATION: "location",
	CATEGORY: "category",
	GUESTS: "guests"
}
const SearchBar = ({menu,isActiveHeader,searchPage,closeSearch}) => {
	const router = useRouter();
	const [searchMenu, setSearchMenu] = useState(null);
	const {location,category,guests} = useSelector(state => state.data)
	const dispatch = useDispatch();

	const handleOnBlur = (event) => {
		const {relatedTarget} = event || {};
		if (!relatedTarget) {
			setSearchMenu(null);
			return;
		}

		const relatedTargetClassList = Array.from(relatedTarget?.classList);
		const result = relatedTargetClassList.some((className)=>{
			const prefix = ['rdr','btn'];
			if(prefix.includes(className.slice(0,3))) return true;
		})
		if (!result) {
			setSearchMenu(null);
		}
	};
	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (!location) {
			setSearchMenu(searchMenuOptions.LOCATION);
			return;
		}

		if(searchPage) closeSearch();
		setSearchMenu(null);

		router.push({
			pathname:'/search',
			query:{
				location,
				category,
				guests:JSON.stringify(guests)
			}
		});
	};
	return (
		<div className={`${isActiveHeader ? 'visible':'invisible'}`}>
			<div className={
				`${!isActiveHeader && 'translate-x-[-75px] transform scale-50 opacity-0 z-[100]'}
				max-w-[850px] mx-auto mt-2 rounded-full bg-white border border-gray-200 duration-300 hidden md:flex
				`
			}>
				<form
					action="/search"
					className={`${menu === headerOptions.FIND_EXPERIENCES

						? 'grid-cols-2'
						: 'grid-cols-[0.8fr,0.7fr,auto] lg:grid-cols-[1fr,0.7fr,auto]'
					} grid flex-grow`}

					onSubmit={handleOnSubmit}
				>

					<SearchOptionButton
						separator
						relative
						title='Location'
						type = 'inputText'
						value={location}
						placeholder = 'Where are you going?'
						onChange = {(event) => {dispatch(typeLocation(event.target.value))}}
						onFocus={() => setSearchMenu(searchMenuOptions.LOCATION)}
						onBlur={handleOnBlur}
						active={searchMenu === searchMenuOptions.LOCATION}
						onClear={() => {
								dispatch(typeLocation(''));
								handleOnBlur();
						}}

					>
						<SearchOptionWrapper className= "left-0">
							<div className="py-4">
								<h2 className="mb-4 text-xs font-bold">GO ANYWHERE, ANYTIME</h2>
								<button className="flex justify-between w-[436px] px-6 py-4 border border-gray-200 rounded-full shadow-md text-primary">
									<span>Explore Now</span>
									<ChevronRightIcon className="h-6" />
								</button>
							</div>
						</SearchOptionWrapper>
					</SearchOptionButton>
					{
						menu === headerOptions.PLACES_TO_STAY ? (
							<>
								<SearchOptionButton
									separator
									relative
									title= "Category"
									placeholder= "Choose category"
									value={category}
									onFocus={() => setSearchMenu(searchMenuOptions.CATEGORY)}
									onBlur={handleOnBlur}
									active={searchMenu === searchMenuOptions.CATEGORY}
									value ={category}
									onClear={() => {
										dispatch(resetCategory());
										handleOnBlur();
									}}
								>
									<SearchOptionWrapper className= "left-4 right-4 w-70">
										<div>
											<div className="py-4 border-b border-gray-200 border-opacity-70"
												onClick={() => dispatch(chooseCategory("King"))}
											>
												<h2 className="font-medium">King</h2>
											</div>
										</div>
										<div>
											<div className="py-4 border-b border-gray-200 border-opacity-70"
												onClick={() => dispatch(chooseCategory("Queen"))}
											>
												<h2 className="font-medium">Queen</h2>
											</div>
										</div>
										<div>
											<div className="py-4 "
												onClick={() => dispatch(chooseCategory("Twin"))}
											>
												<h2 className="font-medium">Twin</h2>
											</div>
										</div>
									</SearchOptionWrapper>
								</SearchOptionButton>
									
								<SearchOptionButton
									relative
									withSearch
									title= "Guests"
									placeholder= "Add guests"
									value={formatGuests(guests)}
									onFocus={() => setSearchMenu(searchMenuOptions.GUESTS)}
									onBlur={handleOnBlur}
									active={searchMenu === searchMenuOptions.GUESTS}
									onClear={() => {
										dispatch(resetGuests());
										handleOnBlur();
									}}
									isSearch={!!searchMenu}
									onSearch={() => setSearchMenu(searchMenuOptions.LOCATION)}
								>
									<SearchOptionWrapper className="right-0 w-96">
										<div>
											<div className="flex py-4 border-b border-gray-200 border-opacity-70">
												<div className="flex-grow">
													<h2 className="font-medium">Adults</h2>
													<p className="text-sm leading-4 text-gray-300">
														Ages 13 or above
													</p>
												</div>
												<Counter
													value ={guests.adults}
													maxValue ={10}
													onIncrease = {() => dispatch(increaseAdults())}
													onDecrease = {() => dispatch(decreaseAdults())}
												/>
											</div>
										</div>
										<div>
											<div className="flex py-4 border-b border-gray-200 border-opacity-70">
												<div className="flex-grow">
													<h2 className="font-medium">Children</h2>
													<p className="text-sm leading-4 text-gray-300">
														Ages 2-12
													</p>
												</div>
												<Counter
													value ={guests.children}
													maxValue ={5}
													onIncrease = {() => dispatch(increaseChildren())}
													onDecrease = {() => dispatch(decreaseChildren())}
												/>
											</div>
										</div>
										<div>
											<div className="flex py-4 ">
												<div className="flex-grow">
													<h2 className="font-medium">Infants</h2>
													<p className="text-sm leading-4 text-gray-300">
														Under 2
													</p>
												</div>
												<Counter
													value ={guests.infants}
													maxValue ={5}
													onIncrease = {() => dispatch(increaseInfants())}
													onDecrease = {() => dispatch(decreaseInfants())}
												/>
											</div>
										</div>
									</SearchOptionWrapper>
								</SearchOptionButton>
							</>
						): (
							<SearchOptionButton
								relative
								withSearch
								title= "Category"
								placeholder= "Choose category"
								value={category}
								onFocus={() => setSearchMenu(searchMenuOptions.CATEGORY)}
								onBlur={handleOnBlur}
								active={searchMenu === searchMenuOptions.CATEGORY}
								isSearch={!!searchMenu}
								onSearch={() => setSearchMenu(searchMenuOptions.LOCATION)}

							>
								<SearchOptionWrapper className= "right-4 w-80">
										<div>
											<div className="py-4 border-b border-gray-200 border-opacity-70"
												onClick={() => dispatch(chooseCategory("King"))}
											>
												<h2 className="font-medium">King</h2>
											</div>
										</div>
										<div>
											<div className="py-4 border-b border-gray-200 border-opacity-70"
												onClick={() => dispatch(chooseCategory("Queen"))}
											>
												<h2 className="font-medium">Queen</h2>
											</div>
										</div>
										<div>
											<div className="py-4 "
												onClick={() => dispatch(chooseCategory("Twin"))}
											>
												<h2 className="font-medium">Twin</h2>
											</div>
										</div>
									</SearchOptionWrapper>

							</SearchOptionButton>
						)
					}
				</form>
			</div>
		</div>
	)
}

export default SearchBar
