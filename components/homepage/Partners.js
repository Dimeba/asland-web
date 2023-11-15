// 'use client'

// styles
import styles from './Partners.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
// import Slider from '../global/Slider'
import Link from 'next/link'

// hooks
// import { useState } from 'react'

const Partners = ({ partners }) => {
	// const [current, setCurrent] = useState(0)
	// const columns = 6
	// const first = current * columns
	// const last = first + columns

	return (
		<section className='sectionDark'>
			<div className='sectionContainer'>
				<h2>Our Partners</h2>
			</div>

			{/* Optimized 6 column slider */}
			{/* <div className='sectionContainer'>
				<Slider
					current={current}
					setCurrent={setCurrent}
					columns={columns}
					content={partners}
					autoUpdate
				>
					{partners.slice(first, last).map(item => (
						<div key={item.sys.id} className={styles.partnersImageContainer}>
							<Link
								href={item.fields.link}
								target='_blank'
								aria-label={`Link to ${item.fields.name} website`}
							>
								<ImageContainer
									src={'https:' + item.fields.logo.fields.file.url}
									className={styles.partnerImage}
									contain
									alt={item.fields.name}
								/>
							</Link>
						</div>
					))}
				</Slider>
			</div> */}

			{/* Full slider */}
			<div className={styles.fullSlider}>
				<div
					className={styles.fullSliderImages}
					style={{
						animationDuration: `${partners.length * 6}s`
					}}
				>
					{partners.map(item => (
						<div key={item.sys.id} className={styles.fullSliderImageConatiner}>
							<Link
								href={item.fields.link}
								target='_blank'
								aria-label={`Link to ${item.fields.name} website`}
							>
								<ImageContainer
									src={'https:' + item.fields.logo.fields.file.url}
									className={styles.fullSliderImage}
									contain
									alt={item.fields.name}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Partners
