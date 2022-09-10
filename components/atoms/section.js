import React from 'react'

const Section = ({title,className,children}) => {
	return (
		<section className="my-10">
			<div className="container">
				<h2 className="mb-4 md:mb-4 lg:mb-8 font-bold text-2xl md:text-3xl lg:text-4xl">{title}</h2>
				<div className={className}>{children}</div>
			</div>
			
		</section>
	)
}

export default Section
