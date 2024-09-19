
// Layout
import Contact from '@/view/layout/contact'

// Components
import MainFooter from '@/core/components/footer/main'
import MainHeader from '@/core/components/header/main'


export default async function ContactPage() {
	
	return (
		<>
			<MainHeader />
			<Contact />
			<MainFooter />
		</>
	)
}
