// styles
import styles from './Investments.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
import Link from 'next/link'

const InvestmentCard = ({ photo, title, subtitle, id }) => {
	return (
		<div className={styles.investmentCard}>
			<Link
				href={`/investments/${id}`}
				style={{ width: '100%' }}
				aria-label='Link to individual page for the investment'
			>
				<ImageContainer src={photo} className={styles.investmentPhoto} />
			</Link>
			<h5>{title}</h5>
			<p className='smallP'>{subtitle}</p>
		</div>
	)
}

export default InvestmentCard
