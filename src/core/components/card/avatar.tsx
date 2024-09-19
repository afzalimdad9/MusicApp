/**
 * @name AvatarCard
 * @file avatar.tsx
 * @description artist avatar card component
 */
"use client"


// Modules
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

// Utilities
import { PersonTypes } from '@/core/types'

interface Props {
    data: PersonTypes
}

const propTypes = {
    /**
     * Set event data
     */
    data: PropTypes.any.isRequired
}


const AvatarCard: React.FC<Props> = ({data}) => {

    return (
        // Avatar [[ Find at scss/components/avatar.scss ]]
        <div className='avatar avatar--xxl scale-animation d-block text-center'>
            <div className='avatar__image mx-auto'>
                <Link href={'/music/artist/' + data.id}>
                    <Image 
                        src={data.cover}
                        width={128}
                        height={128}
                        alt={data.name}
                    />
                </Link>
            </div>
            <Link 
                href={'/music/artist/' + data.id} 
                className='avatar__title mt-3'
            >
                {data.name}
            </Link>
        </div>
    )
}


AvatarCard.propTypes = propTypes as any
AvatarCard.displayName = 'AvatarCard'

export default AvatarCard