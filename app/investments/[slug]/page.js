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

	const investmentsSection = await client.getEntries({
		content_type: 'investmentsSection'
	})

	const investment = investments.items.find(item => item.sys.id == slug)

	return (
		<main>
			{investment && (
				<>
					<InvestmentHero investment={investment} />

					<InvestmentInfo investment={investment} />

					<Investments
						investments={investmentsSection.items[0]}
						highlights={investmentsSection.items[0].fields.highlights}
					/>
				</>
			)}
		</main>
	)
}
