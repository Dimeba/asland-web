// components
import InvestmentHero from '@/components/investments/InvestmentHero'
import Investments from '@/components/homepage/Investments'
import InvestmentInfo from '@/components/investments/InvestmentInfo'

// contentful
import { createClient } from 'contentful'

const client = createClient({
	space: process.env.space,
	accessToken: process.env.accessToken
})

const home = await client.getEntries({
	content_type: 'homepage'
})

const investments = await client.getEntries({
	content_type: 'investments'
})

export async function generateStaticParams() {
	const investments = await client.getEntries({
		content_type: 'investments'
	})

	return investments.items.map(service => ({
		slug: service.sys.id
	}))
}

export default async function Service({ params }) {
	const { slug } = params

	const investments = await client.getEntries({
		content_type: 'investments'
	})

	const investment = investments.items.find(item => item.sys.id == slug)

	return (
		<main>
			<InvestmentHero investment={investment} />

			<InvestmentInfo investment={investment} />

			<Investments
				investments={investments.items.filter(item => item.sys.id != slug)}
				highlights={home.items[0].fields.highlights}
			/>
		</main>
	)
}