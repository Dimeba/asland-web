'use client'

// styles
import styles from './Investments.module.scss'

// components
import Slider from '../global/Slider'
import InvestmentCard from './InvestmentCard'

// hooks
import { useState } from 'react'

const Investments = ({ highlights, investments }) => {
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
				>
					{investments.slice(first, last).map(item => (
						<InvestmentCard
							key={item.sys.id}
							photo={'https:' + item.fields.photo.fields.file.url}
							title={item.fields.title}
							subtitle={item.fields.subtitle}
						/>
					))}
				</Slider>

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
