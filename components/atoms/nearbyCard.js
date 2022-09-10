import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NearbySection = ({data,isSmall}) => {
	return (
		<Link href= "/">
				<a>
						<div
								key={data.location}
								className={`${
										isSmall ? 'items-center': 'flex-col items-start md:items-center' 
								} flex md:flex-row p-2 md:p-3 hover:scale-105 hover:bg-gray-200 hover:bg-opacity-40 duration-300 rounded-2xl gap-x-4`}
						>
								<Image
										src={data.img}
										alt={data.location}
										width={isSmall ? 48 : 64}
										height={isSmall ? 48 : 64}
										
										className='rounded-lg filter hover:brightness-125'
										objectFit="cover"
								/>

								<div className= {`${isSmall || 'mt-2'} md:mt-0`}>
										<h3
												className={`${
														isSmall ? 'text-sm' : 'text-sm lg:text-base'
												} font-medium text-gray-500`}
										>
												{data.location}
										</h3>
										<span
												className={`${isSmall ? 'text-sm' : 'text-sm lg:text-base'
										} text-gray-300`}
										>
												{data.distance}
										</span>
								</div>
						</div>
				</a>
		</Link>
	)
}

export default NearbySection
