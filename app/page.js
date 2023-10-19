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

export default async function Home() {
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

	const news = await client.getEntries({
		content_type: 'newsSection'
	})

	const pageContent = home.items[0]

	return (
		<main>
			<Hero
				video={pageContent.fields.video.fields.file.url}
				videoPlaceholder={pageContent.fields.videoPlaceholder.fields.file.url}
				heroText={pageContent.fields.heroText}
			/>
			<About
				aboutImage={pageContent.fields.aboutImage.fields.file.url}
				missionText={pageContent.fields.missionText}
				aboutText={pageContent.fields.aboutText}
			/>
			<Partners partners={pageContent.fields.partners} />
			<People people={pageContent.fields.people} />
			<Investments
				investments={investments.items}
				highlights={pageContent.fields.highlights}
			/>
			<Venture ventureText={pageContent.fields.ventureText} />
			<News news={news.items[0]} />
		</main>
	)
}
