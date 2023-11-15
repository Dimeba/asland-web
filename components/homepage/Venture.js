// styles
import styles from './Venture.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
import Link from 'next/link'

const Venture = ({ ventures }) => {
	return (
		<section id='venture'>
			<div className='sectionContainer'>
				{/* logo */}
				<div className={styles.logoArea}>
					<ImageContainer
						src='./logo.svg'
						className={styles.logoContainer}
						contain
						priority
						alt='Logo'
					/>
					<p className='largeP'>Ventures</p>
				</div>

				{/* Text */}
				<div className={styles.text}>
					<h3>Investment Approach</h3>
					<p className='largeP'>{ventures.fields.ventureText}</p>
				</div>

				{/* Direct Investments Logos */}
				<h4>Direct Investments</h4>
				<div className='grid' style={{ marginBottom: '4rem' }}>
					{ventures.fields.directInvestments.map(item => (
						<div key={item.sys.id} className={styles.ventureImageContainer}>
							<Link
								href={item.fields.link}
								target='_blank'
								aria-label={`Link to ${item.fields.name}'s website`}
							>
								<ImageContainer
									src={'https:' + item.fields.photo.fields.file.url}
									className={styles.ventureImage}
									contain
									alt={`${item.fields.name} logo`}
								/>
							</Link>
						</div>
					))}
				</div>

				{/* Fund Investments Logos */}
				<h4>Fund Investments</h4>
				<div className='grid'>
					{ventures.fields.fundInvestments.map(item => (
						<div key={item.sys.id} className={styles.ventureImageContainer}>
							<Link
								href={item.fields.link}
								target='_blank'
								aria-label={`Link to ${item.fields.name}'s website`}
							>
								<ImageContainer
									src={'https:' + item.fields.photo.fields.file.url}
									className={styles.ventureImage}
									contain
									alt={''}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Venture
