'use client'

// styles
import styles from './People.module.scss'

// components
import TeamCard from './TeamCard'
import Link from 'next/link'
import ImageContainer from '../global/ImageContainer'

// hooks
import { useState } from 'react'

// contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const People = ({ people }) => {
	const [activeMember, setActiveMember] = useState(people[0])

	return (
		<section id='people'>
			<div className='sectionContainer'>
				<h2>Our People</h2>
			</div>
			<div className='sectionContainer grid'>
				<div className={`${styles.teamColumn} ${styles.team}`}>
					{people.map((member, index) => (
						<TeamCard
							key={member.sys.id}
							name={member.fields.name}
							title={member.fields.title}
							photo={'https:' + member.fields.photo.fields.file.url}
							count={people.length}
							switchBio={() => setActiveMember(people[index])}
							activeMember={activeMember}
						/>
					))}
				</div>
				<div id='bio' className={styles.teamColumn}>
					<h3>{activeMember.fields.name}</h3>
					<p>{activeMember.fields.title}</p>
					<hr />
					<div className={styles.bio}>
						{documentToReactComponents(activeMember.fields.bio)}
					</div>
					<div className='grid'>
						<div className={styles.bioColumn}>
							<h4>Prior Experience</h4>
							{documentToReactComponents(activeMember.fields.experience)}
						</div>
						<div className={styles.bioColumn}>
							<h4>Education</h4>
							{documentToReactComponents(activeMember.fields.education)}
						</div>
					</div>

					{activeMember.fields.linkedin && (
						<Link
							href={activeMember.fields.linkedin}
							style={{ display: 'block' }}
						>
							<div className={styles.linkedin}>
								<p>LinkedIn</p>
								<ImageContainer
									src='/link-arrow.svg'
									className={styles.linkArrow}
									contain
									alt='Link to LinkedIn'
								/>
							</div>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default People
