// styles
import styles from './About.module.scss'

// components
import ImageContainer from '../global/ImageContainer'

const About = ({ aboutImage, missionText, aboutText }) => {
	return (
		<section id='about' className={styles.about}>
			<ImageContainer src={'https:' + aboutImage} className={styles.image} />

			<div className={styles.text}>
				<h2>Our Mission</h2>
				<p className='largeP'>{missionText}</p>
				<hr />
				<p>{aboutText}</p>
			</div>
		</section>
	)
}

export default About
