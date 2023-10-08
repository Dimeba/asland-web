import styles from './Investments.module.scss'

const Investments = ({ highlights }) => {
	return (
		<section id='investments' className='sectionDark'>
			<div className='sectionContainer'>
				<h2>Investments</h2>

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
