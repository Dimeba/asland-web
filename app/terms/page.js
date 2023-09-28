// contentful
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default async function Terms() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const terms = await client.getEntries({
		content_type: 'termsPage'
	})

	const pageContent = terms.items[0]

	return (
		<main>
			<section>
				<div className='sectionContainer' style={{ marginTop: '86px' }}>
					<h2>{pageContent.fields.title}</h2>
					<div className='richTextContainer'>
						{documentToReactComponents(pageContent.fields.text)}
					</div>
				</div>
			</section>
		</main>
	)
}
