import styles from './Investments.module.scss'

const Investments = () => {
	return (
		<section id='investments' className='sectionDark'>
			<div className='sectionContainer'>
				<h2>Investments</h2>

				{/* Highlights */}
				<div className={`sectionContainer ${styles.highlights}`}>
					<div className={styles.highlight}>
						<h2>4</h2>
						<p className='smallP'>MARKETS</p>
					</div>
					<div className={styles.highlight}>
						<h2>$525m</h2>
						<p className='smallP'>EQUITY INVESTED</p>
					</div>
					<div className={styles.highlight}>
						<h2>10,445</h2>
						<p className='smallP'>RESIDENTIAL UNITS</p>
					</div>
					<div className={styles.highlight}>
						<h2>423,165</h2>
						<p className='smallP'>RETAIL SF</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Investments
