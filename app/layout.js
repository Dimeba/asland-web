// styles
import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// components
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'

export const metadata = {
	title: 'Asland Capital Partners | New York City',
	description: `At the intersection of real estate, public policy, urbanism and technology, Asland's mission is to acquire, reposition, and operate best-in-class multifamily, mixed-use and retail assets in revitalizing sub-markets throughout the U.S that improve communities and enhance the lives of their residents.`,
	icons: {
		icon: '/favicon.svg'
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
