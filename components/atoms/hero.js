import Image from 'next/image'
import React from 'react'

const Hero = () => {
		return (
				<section className='relative h-[65vh] md:h-[85vh]'>
					<div className="absolute z-10 w-full bg-gradient-to-b from-transparent-black to-transparent h-28" />
					<Image
							src="/images/Hero5.jpg"
							layout='fill'
							objectFit='cover'
							objectPosition="center bottom"
							placeholder="blur"
							blurDataURL="/images/Hero3.jpg"
							quality={50}
					/>
					<div  className='container'>

							<div className="absolute z-10 left-0 right-0 top-[45%] md:top-[50%] xl:top-[40%]">
									<h1 className="max-w-[250px] xl:max-w-[350px] mx-auto px-4 text-2xl font-bold tracking-wide text-center text-gray-500 md:px-0 md:text-3xl xl:text-4xl">
											Find the best rooms around the world
									</h1>
									<div className="text-center">

											<button className=" rounded-md sm:py-3 md:mx-0  text-sm font-medium text-white px-8 py-2 mx-auto mt-4  bg-primary shadow-lg hover:shadow-xl hover:scale-90 transition duration-200 lg:text-base">
													Explore now
											</button>
									</div>
							</div>
					</div>
				</section>
		)
}

export default Hero
