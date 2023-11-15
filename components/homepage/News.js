'use client'

// styles
import styles from './News.module.scss'

// components
import Slider from '../global/Slider'
import NewsCard from './NewsCard'

// hooks
import { useState } from 'react'

const News = ({ news }) => {
	// slider
	const [current, setCurrent] = useState(0)
	const [columns, setColumns] = useState(3)
	const first = current * columns
	const last = first + columns

	return (
		<section id='news' className='sectionDark'>
			<div className='sectionContainer'>
				<h2>Asland In the News</h2>

				{/* News */}
				<Slider
					current={current}
					setCurrent={setCurrent}
					columns={columns}
					setColumns={setColumns}
					mobileColumns={1}
					content={news.fields.news}
					showArrows
				>
					{news.fields.news.slice(first, last).map(item => (
						<NewsCard
							key={item.sys.id}
							photo={'https:' + item.fields.photo.fields.file.url}
							title={item.fields.title}
							publisher={item.fields.publisher}
							date={item.fields.date}
							text={item.fields.text}
							link={item.fields.link}
						/>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default News
