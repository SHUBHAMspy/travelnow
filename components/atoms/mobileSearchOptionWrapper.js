import { ChevronLeftIcon } from '@heroicons/react/outline';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatGuests } from '../../utils/guestUtils';

const MobileSearchOptionWrapper = ({title,handleOnBack,haveNavigation,children}) => {
	
	const {category,guests} = useSelector(state => state.data);

	return (
		<div className={`${haveNavigation && 'mb-16'} px-4 py-6 bg-white rounded-t-3xl`}>
			<div className="flex items-center mb-5 h-7">
				<button 
					className="absolute p-[5px] border rounded-full border-gray-200"
					onClick={handleOnBack}
					>
					<ChevronLeftIcon className="h-6 "/>
				</button>

				<div className="flex flex-col justify-center w-full text-center">
					<h3 className="font-medium">{title}</h3>
					<span className="text-xs text-gray-300">
						{category ? category : ''}
						{formatGuests(guests) ? `. ${formatGuests(guests)}`: ''}
					</span>
				</div>
			</div>
			<div>{children}</div>
		</div>
	)
}

export default MobileSearchOptionWrapper
