// styles
import styles from './Venture.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
import Link from 'next/link'

const Venture = ({ ventureText }) => {
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
					<p className='largeP'>Ventures+</p>
				</div>

				{/* Text */}
				<div className={styles.text}>
					<h3>Investment Approach</h3>
					<p className='largeP'>{ventureText}</p>
				</div>

				{/* Direct Investments Logos */}
				<h4>Direct Investments</h4>
				<div className='grid' style={{ marginBottom: '4rem' }}>
					<div className={styles.ventureImageContainer}>
						<Link href='' target='_blank'>
							<ImageContainer
								src='/logo.svg'
								className={styles.ventureImage}
								contain
								alt={''}
							/>
						</Link>
					</div>
				</div>

				{/* Fund Investments Logos */}
				<h4>Fund Investments</h4>
				<div className='grid'>
					<div className={styles.ventureImageContainer}>
						<Link href='' target='_blank'>
							<ImageContainer
								src='/logo.svg'
								className={styles.ventureImage}
								contain
								alt={''}
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Venture