// styles
import styles from './About.module.scss'

// components
import ImageContainer from '../global/ImageContainer'

const About = ({ about }) => {
	return (
		<section id='about' className={styles.about}>
			<ImageContainer
				src={'https:' + about.fields.aboutImage.fields.file.url}
				className={styles.image}
			/>

			<div className={styles.text}>
				<h2>Our Mission</h2>
				<p className='largeP'>{about.fields.missionText}</p>
				<hr />
				<p>{about.fields.aboutText}</p>
			</div>
		</section>
	)
}

export default About
