import Image from 'next/image';
import React from 'react';
import { headerOptions } from '../../organism/header';

const Step1 = ({handleOnChoose,makeChoice}) => {
	return (
		<>
			<button 
				className="flex items-center justify-between w-full p-4 mb-3 text-left border border-gray-200 shadow-lg rounded-xl"
				onClick={() => {
					makeChoice(headerOptions.PLACES_TO_STAY)
					handleOnChoose(headerOptions.PLACES_TO_STAY);
				}}
			>
				<div>
          <h4 className="font-medium">Find a place to stay</h4>
          <p className="text-xs text-gray-300">Entire homes, rooms & more</p>
        </div>

				<Image 
					src="/images/2.jpg"
					alt='place to stay'
					width={50}
					height={50}
					className="rounded-lg"
				/>

			</button>
			<button 
				className="flex items-center justify-between w-full p-4 mb-3 text-left border border-gray-200 shadow-lg rounded-xl"
				onClick={() => {
					makeChoice(headerOptions.FIND_EXPERIENCES);
					handleOnChoose(headerOptions.FIND_EXPERIENCES);
				}}
			>
				<div>
          <h4 className="font-medium">Find an experience</h4>
          <p className="text-xs text-gray-300">Activities hosted by locals</p>
        </div>

				<Image 
					src="/images/onlineExperience.jpg"
					alt='place to stay'
					width={50}
					height={50}
					className="rounded-lg"
				/>

			</button>
			
		</>
	)
}

export default Step1
