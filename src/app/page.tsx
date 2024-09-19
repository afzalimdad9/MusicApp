
// Components
import MainFooter from '@/core/components/footer/main'
import MainHeader from '@/core/components/header/main'
import Feature from '@/view/landing/feature'
import Hero from '@/view/landing/hero'
import Event from '@/view/landing/event'
import Plan from '@/view/landing/plan'
import Pricing from '@/view/layout/pricing'
import Blog from '@/view/landing/blog'
import AvatarCard from '@/core/components/card/avatar'
import Carousel from '@/core/components/carousel'
import Artist from '@/view/landing/artist'

// Utilities
import { getArtists, getEvents, getPlans } from '@/core/utils/helper'


export default async function Home() {

    const artistList = getArtists()
	const eventList = getEvents()
	const planList = getPlans()

	const [
		artists,
		events,
		plans
	] = await Promise.all([
		artistList,
		eventList,
		planList
	])
	
	return (
		<>
			<MainHeader />
            <Hero />
            <Feature />
            <Event events={events} />
            <Plan>
				<Pricing data={plans} userPlan showLink />
			</Plan>
			<Artist>
				<Carousel 
                    Component={AvatarCard}
                    slideView={6}
                    data={artists} 
                    pagination 
                    autoplay
                />
			</Artist>
			<Blog />
			<MainFooter />
		</>
	)
}
