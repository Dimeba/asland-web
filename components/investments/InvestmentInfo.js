// styles
import styles from './InvestmentInfo.module.scss'

// components
import ImageContainer from '../global/ImageContainer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const InvestmentInfo = ({ investment }) => {
	return (
		<section className={styles.info}>
			<ImageContainer
				src={'https:' + investment.fields.map.fields.file.url}
				className={styles.map}
			/>

			<div className={styles.text}>
				<h3>Overview</h3>
				<div style={{ marginBottom: '2rem' }}>
					{documentToReactComponents(investment.fields.overview)}
				</div>
				<h3>Collaborators</h3>
				<div className={styles.collaborators}>
					{investment.fields.collaborators.map(item => (
						<div key={item.sys.id} className={styles.collaborator}>
							<h5>{item.fields.name}</h5>
							<p>{item.fields.title}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default InvestmentInfo
