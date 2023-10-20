// styles
import styles from './Contact.module.scss'

// components
import ImageContainer from '../global/ImageContainer'

const Contact = () => {
	return (
		<section id='contact'>
			<div className='sectionContainer'>
				<h2>Contact Us</h2>
			</div>

			<div className={styles.contact}>
				<ImageContainer src='/asland-map.jpg' className={styles.image} />

				<div className={styles.text}>
					<div className={styles.contactColumn}>
						<p>
							Asland Capital Partners LLC is a private real estate investment
							firm headquartered in New York City.
						</p>

						<hr />

						<h4>Asland Capital Partners LLC</h4>
						<p>
							31 Hudson Yards, 11th Floor <br />
							New York, NY 10001
						</p>
					</div>

					<div className={styles.contactColumn}>
						<div className={styles.contactInfo}>
							<h4>Investment Opportunities</h4>
							<p>info@aslandcap.com</p>
							<p>(212) 390 4146</p>
						</div>

						<div className={styles.contactInfo}>
							<h4>Investor Inquires</h4>
							<p>Investors@aslandcap.com</p>
							<p>(212) 390 4146</p>
						</div>

						<div className={styles.contactInfo}>
							<h4>Press Inquiries</h4>
							<p>asland.press@greatink.com</p>
							<p>(212) 741 2977</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
