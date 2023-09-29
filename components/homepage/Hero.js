// 'use client'

// contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// components
import ImageContainer from '../global/ImageContainer'
import Link from 'next/link'

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
				playsInline
				preload='auto'
			>
				<source src={'https:' + video} type='video/mp4' />
			</video>

			<div className={styles.heroText}>
				{documentToReactComponents(heroText)}
			</div>

			<Link href='/#about'>
				<ImageContainer
					src='./arrow-down.svg'
					className={styles.arrow}
					alt='Next section button'
				/>
			</Link>
		</section>
	)
}

export default Hero
