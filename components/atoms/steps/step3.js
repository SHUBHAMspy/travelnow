import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAdults, decreaseChildren, decreaseInfants, increaseAdults, increaseChildren, increaseInfants, resetGuests } from '../../../state/actions/dataActions';
import Counter from "../counter";

const Step3 = ({handleOnNext}) => {
	const {guests} = useSelector(state => state.data);
  const  dispatch = useDispatch();
  const totalGuests = Object.values(guests).reduce((accuCount,currCount) => accuCount + currCount );

  return (
    <>
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

      <div className="fixed bottom-0 left-0 right-0 grid items-center grid-cols-2 p-4 text-lg bg-white border-t border-gray-200 gap-x-4">
      {totalGuests ? (
              <span 
              className="px-4 py-3 text-base text-center text-gray-500 underline duration-300 border border-gray-200 rounded-lg active:scale-95"
              onClick={() => {
                
                  dispatch(resetGuests());
                
              }}
            >
                Clear | {totalGuests}
              </span>
            ) : ( <span></span> )}
          <button
            className="flex items-center justify-center px-4 py-3 text-base text-white duration-300 rounded-lg bg-primary active:scale-95"
            onClick={handleOnNext}
          >
            <SearchIcon className="h-4 mr-1" />
            Search
        </button>

      </div>
    </>
  )
}

export default Step3
