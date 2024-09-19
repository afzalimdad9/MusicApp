
// Layout
import Music from '@/view/layout/music'

// Components
import MusicFooter from '@/core/components/footer/music'
import MusicHeader from '@/core/components/header/music'


export default async function MusicLayout(props: any) {
	
	return (
		<>
			<MusicHeader />
			<Music {...props} />
			<MusicFooter />
		</>
	)
}
