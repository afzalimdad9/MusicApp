
// Layout
import About from '@/view/layout/about'

// Components
import MainFooter from '@/core/components/footer/main'
import MainHeader from '@/core/components/header/main'


export default async function AboutPage() {
	
	return (
		<>
			<MainHeader />
			<About />
			<MainFooter />
		</>
	)
}
