// styles
import styles from './InvestmentHero.module.scss'

// components
import ImageContainer from '../global/ImageContainer'

const InvestmentHero = ({ investment }) => {
	return (
		<div className={styles.hero}>
			<ImageContainer
				src={'https:' + investment.fields.photo.fields.file.url}
				className={styles.heroImage}
			/>

			<div className={styles.heroText}>
				<div className='sectionContainer'>
					<h2>{investment.fields.title}</h2>
					<p className='largeP'>{investment.fields.subtitle}</p>
				</div>
			</div>
		</div>
	)
}

export default InvestmentHero
