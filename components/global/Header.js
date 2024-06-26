'use client'

// styles
import styles from './Header.module.scss'

// components
import Link from 'next/link'
import ImageContainer from './ImageContainer'
import { Spin as Hamburger } from 'hamburger-react'

// hooks
import { useState } from 'react'

const Header = () => {
	const menu = [
		{
			text: 'About',
			url: '/#about'
		},
		{
			text: 'People',
			url: '/#people'
		},
		{
			text: 'Investments',
			url: '/#investments'
		},
		{
			text: 'Venture',
			url: '/#venture'
		},
		{
			text: 'News',
			url: '/#news'
		},
		{
			text: 'Contact',
			url: '/#contact'
		}
	]

	const [hoveredItem, setHoveredItem] = useState(null)
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<header className={styles.header}>
			<div className={`sectionContainer ${styles.headerContainer}`}>
				<Link href='/' aria-label='Homepage'>
					<ImageContainer
						src='/logo.svg'
						className={styles.logoContainer}
						contain
						priority
						alt='Logo'
					/>
				</Link>

				<div className={styles.hamburger}>
					<Hamburger
						color='#585149'
						size={24}
						toggled={openMenu}
						toggle={setOpenMenu}
					/>
				</div>

				<nav className={`${styles.navigation} ${!openMenu && styles.hidden}`}>
					{menu.map((item, index) => (
						<a
							onMouseEnter={() => setHoveredItem(index)}
							onMouseLeave={() => setHoveredItem(null)}
							key={index}
							href={item.url}
							onClick={() => setOpenMenu(false)}
							aria-label={item.text}
						>
							<p
								className={
									hoveredItem != index && hoveredItem != null
										? styles.blurredText
										: ''
								}
							>
								{item.text}
							</p>
						</a>
					))}
				</nav>

				<div
					className={`${styles.loginButtonContainer} ${
						!openMenu && styles.hidden
					}`}
				>
					<Link
						href='https://app.junipersquare.com/login?path=%2Fi%2Faslandcap'
						aria-label='Investor Login'
					>
						<button className={styles.loginButton}>Investor Login</button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
