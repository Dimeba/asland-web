// 'use client'

// contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// styles
import styles from './Hero.module.scss'

const Hero = ({ video, videoPlaceholder, heroText }) => {
	return (
		<section className={styles.hero}>
			<video
				autoPlay
				loop
				poster={'https:' + videoPlaceholder}
				muted
				playsinline
				preload='auto'
			>
				<source src={'https:' + video} type='video/mp4' />
				{/* <source src='./hero.mp4' type='video/mp4' /> */}
			</video>

			<div className={styles.heroText}>
				{documentToReactComponents(heroText)}
			</div>
		</section>
	)
}

export default Hero
