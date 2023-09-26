// components
import Image from 'next/image'

const ImageContainer = ({ src, styles, fit, priority, alt }) => {
	return (
		<div className={styles} style={{ position: 'relative' }}>
			<Image
				src={src}
				fill
				quality={100}
				sizes='(max-width: 768px) 100vw, 768px'
				style={{ objectFit: fit ? fit : 'cover' }}
				priority={priority ? priority : false}
				alt={alt ? alt : 'Image'}
				as='img'
			/>
		</div>
	)
}

export default ImageContainer
