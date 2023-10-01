'use client'

// styles
import styles from './Slider.module.scss'

// components
import ImageContainer from './ImageContainer'

// hooks
import { useState, useEffect } from 'react'

const Slider = ({ children, content, current, setCurrent, columns }) => {
	// total number of slides
	const totalSlides = Math.ceil(content.length / columns)

	// getting next and previoous slide
	const getNextSlide = () => {
		return (current + 1) % totalSlides
	}

	const getPrevSlide = () => {
		return (current - 1 + totalSlides) % totalSlides
	}

	// changing slides
	const nextSlide = () => {
		setCurrent(getNextSlide())
	}

	const prevSlide = () => {
		setCurrent(getPrevSlide())
	}

	return (
		<div className={styles.slider}>
			<div onClick={prevSlide}>
				<ImageContainer
					src='/arrow-left.svg'
					className={styles.sliderArrow}
					alt='Slider button to the left side'
				/>
			</div>

			<div className={styles.sliderContent}>{children}</div>

			<div onClick={nextSlide}>
				<ImageContainer
					src='/arrow-right.svg'
					className={styles.sliderArrow}
					alt='Slider button to the right side'
				/>
			</div>
		</div>
	)
}

export default Slider
