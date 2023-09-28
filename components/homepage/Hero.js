// styles
import styles from './Hero.module.scss'

const Hero = ({ video, videoPlaceholder }) => {
	return (
		<section className={styles.hero}>
			<video autoPlay loop poster={'https:' + videoPlaceholder}>
				<source src={'https:' + video} type='video/mp4' />
			</video>
		</section>
	)
}

export default Hero
