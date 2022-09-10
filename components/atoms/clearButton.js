import { XIcon } from '@heroicons/react/outline'
import React from 'react'

const ClearButton = ({active,isFocus = true,separator,onClick}) => {
    return (
        <div className= {`${separator && 'border-r border-gray-200'} flex items-center h-8`}>
            <div
                role= "button"
                tabIndex={0}
                className={`${isFocus && active ? 'opacity-100':'opacity-0'}
                    flex items-center pr-3`} 
                
                onClick={onClick}

            >
                <XIcon className="h-6 p-1 bg-gray-200 rounded-full bg-opacity-60 hover:bg-opacity-100"/>
            </div>
        </div>
    )
}

export default ClearButton
