
// Components
import PlanCard from '@/core/components/card/plan'
import ProfileForm from './form'


export default async function ProfilePage() {
	
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
					{/* plan [[ Find at scss/framework/plan.scss ]] */}
					<div className='plan bg-light'>
						<PlanCard showLink />
						<div className='plan__data'>
							<ProfileForm />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
