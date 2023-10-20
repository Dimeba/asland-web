'use client'

// styles
import styles from './Investments.module.scss'

// components
import Slider from '../global/Slider'
import InvestmentCard from './InvestmentCard'

// hooks
import { useState } from 'react'

const Investments = ({ highlights, investments, title }) => {
	// filter
	const [filter, setFilter] = useState('Preservation')

	// slider
	const [current, setCurrent] = useState(0)
	const [columns, setColumns] = useState(3)
	const first = current * columns
	const last = first + columns

	return (
		<section id='investments' className='sectionDark'>
			<div className='sectionContainer'>
				{title && <h2>Investments</h2>}

				{/* Filter */}
				<div className={styles.filter}>
					<h4>
						<span
							className={filter == 'Preservation' ? styles.active : ''}
							onClick={() => setFilter('Preservation')}
						>
							Preservation
						</span>{' '}
						|{' '}
						<span
							className={filter != 'Preservation' ? styles.active : ''}
							onClick={() => setFilter('New Construction')}
						>
							New Construction
						</span>
					</h4>
				</div>

				{/* Investments */}
				<Slider
					current={current}
					setCurrent={setCurrent}
					columns={columns}
					setColumns={setColumns}
					mobileColumns={1}
					content={investments}
					showArrows
				>
					{investments
						.filter(item => item.fields.type == filter)
						.slice(first, last)
						.map(item => (
							<InvestmentCard
								key={item.sys.id}
								photo={'https:' + item.fields.photo.fields.file.url}
								title={item.fields.title}
								subtitle={item.fields.subtitle}
								id={item.sys.id}
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
