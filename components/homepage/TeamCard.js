// styles
import styles from './People.module.scss'

// components
import ImageContainer from '../global/ImageContainer'

const TeamCard = ({ name, title, photo, switchBio, activeMember }) => {
	return (
		<div
			className={`${styles.teamCard} ${
				name == activeMember.fields.name ? styles.active : ''
			}`}
			onClick={switchBio}
		>
			<ImageContainer src={photo} className={styles.teamPhoto} />
			<div className={styles.overlay}></div>
			<hr />
			<h5>{name}</h5>
			<p className='smallP'>{title}</p>

			<a href='/#bio'>
				<p className={styles.showBioLink}>See Bio</p>
			</a>
		</div>
	)
}

export default TeamCard
