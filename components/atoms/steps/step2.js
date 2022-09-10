import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCategory, resetCategory } from '../../../state/actions/dataActions';
import { headerOptions } from '../../organism/header';

const Step2 = ({choice,handleOnNext}) => {
const  dispatch = useDispatch();
const {category} = useSelector(state => state.data);

  return (
    <>
      <div className='text-center'>
        <div>
          <div className="py-4 rounded-lg border-t-2 border-r-2 border-l-2 border-b-2 border-gray-200 border-opacity-70 cursor-pointer"
            onClick={() => dispatch(chooseCategory("King"))}
          >
            <h2 className="font-medium">King</h2>
          </div>
        </div>
        <div>
          <div className="py-4 rounded-lg border-r-2 border-l-2 border-b-2 border-gray-200 border-opacity-70 cursor-pointer"
            onClick={() => dispatch(chooseCategory("Queen"))}
          >
            <h2 className="font-medium">Queen</h2>
          </div>
        </div>
        <div>
          <div className="py-4 rounded-lg border-r-2 border-l-2 border-b-2 border-gray-200 border-opacity-70 cursor-pointer"
            onClick={() => dispatch(chooseCategory("Twin"))}
          >
            <h2 className="font-medium">Twin</h2>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 grid items-center grid-cols-2 p-4 text-lg bg-white border-t border-gray-200 gap-x-4">
        {choice === headerOptions.PLACES_TO_STAY && (
          <>
            <span 
              className="px-4 py-3 text-base text-center text-gray-500 underline duration-300 border border-gray-200 rounded-lg active:scale-95"
              onClick={() => {
                if (category) {
                  dispatch(resetCategory());
                } else {
                  handleOnNext();
                }
              }}
            >
                {category ? 'Clear' : 'Skip'}
            </span>

            <button
              disabled={!category}
              className={`${
                category ? 'bg-gray-500' : 'bg-gray-200'
              } px-4 py-3 text-white rounded-lg text-base active:scale-95 duration-300 cursor-pointer`}
              onClick={handleOnNext}
            >
              Next
            </button>
          </> 
        )}

        {choice === headerOptions.FIND_EXPERIENCES && (
          <>
            {category ? (
              <span 
              className="px-4 py-3 text-base text-center text-gray-500 underline duration-300 border border-gray-200 rounded-lg active:scale-95"
              onClick={() => {
                if (category) {
                  dispatch(resetCategory());
                }
              }}
            >
                Clear
              </span>
            ) : ( <span></span> )}
          <button
            className="flex items-center justify-center px-4 py-3 text-base text-white duration-300 rounded-lg bg-primary active:scale-95"
            onClick={handleOnNext}
          >
            <SearchIcon className="h-4 mr-1" />
            Search
        </button>
        </> 
        )}
      </div>
      
    </>
  )
}

export default Step2
