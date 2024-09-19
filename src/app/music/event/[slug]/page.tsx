
// Layout
import EventDetails from '@/view/layout/event-details'

// Utilities
import { getEvents } from '@/core/utils/helper'
import { EventTypes, ParamsTypes } from '@/core/types'


export default async function EventDetailsPage({params}: ParamsTypes) {

    const event = (await getEvents())
        .find(item => item.id === params.slug) as EventTypes        
	
	return <EventDetails event={event} />
}
