'use client'

// contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// components
import ImageContainer from '../global/ImageContainer'

// hooks
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

// styles
import styles from './Hero.module.scss'

const Hero = ({ video, videoPlaceholder, heroText }) => {
	const options = {
		root: null,
		rootMargin: '0%',
		threshold: 0
	}

	const [targetRef, isIntersecting] = useIntersectionObserver(options)

	return (
		<section className={styles.hero}>
			<video
				ref={targetRef}
				autoPlay
				loop
				poster={'https:' + videoPlaceholder}
				muted
				playsInline
				preload='auto'
			>
				{isIntersecting && <source src={'https:' + video} type='video/mp4' />}
			</video>

			<div className={styles.heroText}>
				<div className='sectionContainer' style={{ overflow: 'hidden' }}>
					{documentToReactComponents(heroText)}
				</div>
			</div>

			<a href='/#about' aria-label='About Us'>
				<ImageContainer
					src='./arrow-down.svg'
					className={styles.arrow}
					alt='Next section button'
				/>
			</a>
		</section>
	)
}

export default Hero
