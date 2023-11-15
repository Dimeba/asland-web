// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/homepage/Hero'
import About from '@/components/homepage/About'
import Partners from '@/components/homepage/Partners'
import People from '@/components/homepage/People'
import Investments from '@/components/homepage/Investments'
import Venture from '@/components/homepage/Venture'
import News from '@/components/homepage/News'
import Contact from '@/components/homepage/Contact'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const hero = await client.getEntries({
		content_type: 'heroSection'
	})

	const about = await client.getEntries({
		content_type: 'aboutSection'
	})

	const partners = await client.getEntries({
		content_type: 'partnersSection'
	})

	const people = await client.getEntries({
		content_type: 'peopleSection'
	})

	const investments = await client.getEntries({
		content_type: 'investmentsSection'
	})

	const ventures = await client.getEntries({
		content_type: 'venturesSection'
	})

	const news = await client.getEntries({
		content_type: 'newsSection'
	})

	return (
		<main>
			<Hero hero={hero.items[0]} />
			<About about={about.items[0]} />
			<Partners partners={partners.items[0].fields.partners} />
			<People people={people.items[0].fields.people} />
			<Investments investments={investments.items[0]} title />
			<Venture ventures={ventures.items[0]} />
			<News news={news.items[0]} />
			<Contact />
		</main>
	)
}
