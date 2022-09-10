import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCategory, resetGuests, typeLocation } from '../../state/actions/dataActions';
import { headerOptions } from '../organism/header';
import MobileSearchOptionWrapper from './mobileSearchOptionWrapper';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';

const MobileSearchOption = ({active,onClose}) => {
	const [step, setStep] = useState(1);
	const [choice, setChoice] = useState(null);

	
	const stepNames = [
		'What are you looking for?',
		'What kind of stay you want?',
		"Who's coming?"
	];

	const {location,category,guests} = useSelector(state => state.data);
	const router = useRouter();
	const  dispatch = useDispatch();
	
	return (
		<div 
			className={`${
				active ? 'visible opacity-100' : 'invisible opacity-0'
			} flex flex-col items-end justify-end inset-0 z-50 fixed bg-gradient-to-r from-[#70019d] to-[#be0181] duration-200`}
		>
			<div
				className={`${
					active ? 'translate-y-0 ' : 'translate-y-full '
				}  bottom-0 left-0 right-0 z-50 fixed w-full duration-700`}
			>
				<h2 className="w-full px-4 py-3 text-2xl font-medium text-white">
					{stepNames[step - 1]}
				</h2>
				<MobileSearchOptionWrapper 
					haveNavigation={step !== 1}
					title={location || 'Location'}
					handleOnBack={() => {
						setStep((prev) => prev - 1);
						if (step === 1) {
							dispatch(typeLocation(''));
							setStep(1);
							onClose();
							
						}
						if (step === 2) dispatch(resetCategory());
						if (step === 3) dispatch(resetGuests());					
					}}
				>
					{step === 1 && (
						<Step1 
							handleOnChoose={(choice) => {
								if(choice === headerOptions.PLACES_TO_STAY) setStep(2);
								if(choice === headerOptions.FIND_EXPERIENCES) setStep(2);
							}}

							makeChoice={(choice) => setChoice(choice)}
							
						/>
					)}

					{step === 2 && (
						<Step2 
							choice={choice}
							handleOnNext={() => setStep(3)}
						/>
					)}

					{step === 3 && (
						<Step3
							handleOnNext={() => {
								router.push({
									pathname:'/search',
									query:{
										location,
										category,
										guests:JSON.stringify(guests)
									}
								});

								dispatch(resetGuests());
								dispatch(resetCategory());
								dispatch(typeLocation(''));
								setStep(1);
								onClose();
							}}
						/>
					)}
					

				</MobileSearchOptionWrapper>

			</div>
		</div>
	)
}


export default MobileSearchOption
