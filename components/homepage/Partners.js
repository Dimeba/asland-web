'use client'

// styles
import styles from './Partners.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
import Slider from '../global/Slider'

// hooks
import { useState } from 'react'

// temp list
const partners = [
	'/partner-sample.png',
	'/partner-sample.png',
	'/partner-sample.png',
	'/partner-sample.png',
	'/partner-sample.png',
	'/partner-sample.png',
	'/logo.svg',
	'/logo.svg',
	'/logo.svg',
	'/logo.svg',
	'/logo.svg',
	'/logo.svg',
	'/partner-sample.png',
	'/partner-sample.png'
]

const Partners = () => {
	const [current, setCurrent] = useState(0)
	const columns = 6
	const first = current * columns
	const last = first + columns

	return (
		<section className='sectionDark'>
			<div className='sectionContainer'>
				<h2>Our Partners</h2>
			</div>
			<div className='sectionContainer'>
				<Slider
					current={current}
					setCurrent={setCurrent}
					columns={columns}
					content={partners}
				>
					{partners.slice(first, last).map((item, index) => (
						<div key={index} className={styles.partnersImageContainer}>
							<ImageContainer
								src={item}
								className={styles.partnerImage}
								contain
							/>
						</div>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default Partners
