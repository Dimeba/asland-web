// styles
import styles from './Investments.module.scss'

// components
import ImageContainer from '../global/ImageContainer'

const InvestmentCard = ({ photo, title, subtitle }) => {
	return (
		<div className={styles.investmentCard}>
			<ImageContainer src={photo} className={styles.investmentPhoto} />
			<h5>{title}</h5>
			<p className='smallP'>{subtitle}</p>
		</div>
	)
}

export default InvestmentCard
