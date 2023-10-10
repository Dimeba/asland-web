'use client'

// styles
import styles from './Investments.module.scss'

// components
import Slider from '../global/Slider'

// hooks
import { useState } from 'react'

// temp list
const investments = [1, 2, 3]

const Investments = ({ highlights }) => {
	const [current, setCurrent] = useState(0)
	const columns = 3
	const first = current * columns
	const last = first + columns

	return (
		<section id='investments' className='sectionDark'>
			<div className='sectionContainer'>
				<h2>Investments</h2>

				{/* Investments */}
				<Slider
					current={current}
					setCurrent={setCurrent}
					columns={columns}
					content={investments}
					showArrows
				></Slider>

				{/* Highlights */}
				<div className={`sectionContainer ${styles.highlights}`}>
					{highlights.map(highlight => (
						<div className={styles.highlight} key={highlight.sys.id}>
							<h2>{highlight.fields.value}</h2>
							<p className='smallP'>{highlight.fields.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Investments
