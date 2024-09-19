
// Layout
import Pricing from '@/view/layout/pricing'

// Utilities
import { getPlans } from '@/core/utils/helper'


export default async function PlanPage() {

	const plan = await getPlans()
	
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/event.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
				{/* Section [[ Find at scss/framework/section.scss ]] */}
				<div className='section'>
					<Pricing data={plan} />
				</div>
			</div>
		</>
	)
}
