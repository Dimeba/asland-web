// styles
import styles from './News.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
import Link from 'next/link'

const NewsCard = ({ photo, title, publisher, date, text, link }) => {
	return (
		<div className={styles.newsCard}>
			<ImageContainer src={photo} className={styles.newsPhoto} />
			<div className={styles.newsText}>
				<h4>{title}</h4>
				<p className='largeP' style={{ marginBottom: '1rem' }}>
					{publisher} | {date}
				</p>
				<p className='smallP' style={{ marginBottom: '1rem' }}>
					{text}
				</p>
				<Link href={link} target='_blank' aria-label='Link to the article'>
					<div className='link'>
						<p>Read More</p>
						<ImageContainer
							src='/link-arrow.svg'
							className='linkArrow'
							contain
							alt='Link to LinkedIn'
						/>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default NewsCard
