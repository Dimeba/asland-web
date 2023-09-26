// styles
import styles from './Footer.module.scss'

// components
import Link from 'next/link'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className={`sectionContainer ${styles.footerContainer}`}>
				<p>Copyright © {year} Asland. All Rights reserved</p>
				<p>
					Investor Login | Terms & Conditions |{' '}
					<Link href='https://www.linkedin.com/company/aslandcapitalpartners/'>
						LinkedIn
					</Link>
				</p>
			</div>
		</footer>
	)
}

export default Footer