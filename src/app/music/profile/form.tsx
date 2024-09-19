/**
 * @name ProfileForm
 * @file form.tsx
 * @description profile form component
 */
"use client"


// Modules
import React from 'react'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// Contexts
import { useTheme } from '@/core/contexts/theme'

// Components
import Input from '@/core/components/input'
import ErrorHandler from '@/core/components/error'

// Utilities
import { ProfileTypes } from '@/core/types'


const ProfileForm: React.FC = () => {

    const {replaceClassName} = useTheme()
    const locale = useTranslations()
    
    const { 
        register, 
        handleSubmit,
        getValues,
        formState: { errors } 
    } = useForm<ProfileTypes>({
        defaultValues: {
            image: '/images/users/thumb.jpg',
            firstName: 'Androws',
            lastName: 'Kinny',
            displayName: 'Androws Kinny',
            location: 'Australia',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aspernatur veniam eum distinctio repudiandae. Nihil cum quas dolores. Beatae odio temporibus quisquam quae! Possimus repellat sapiente incidunt.',
        }
    })


    /**
     * 
     * Handle form `onSubmit` event
     * @param data 
     */
    const submitForm = (data: ProfileTypes) => {
    }


    return (
        <form 
            className={replaceClassName(
                'px-4 pt-2 pe-xl-0 pt-sm-0 mt-4 mb-3 my-sm-0 w-100'
            )} 
            onSubmit={handleSubmit(submitForm)}
        >
            <div className='d-flex align-items-center mb-4'>
                <div className='avatar avatar--xl'>
                    <div className='avatar__image'>
                        <Image
                            src={getValues().image as string}
                            className='img-fluid'
                            width={128}
                            height={128}
                            alt='User avatar'
                        />
                    </div>
                </div>
                <div className={replaceClassName('ps-3')}>
                    <input 
                        type='file' 
                        id='profile' 
                        className='d-none' 
                        {...register('image')}
                    />
                    <label 
                        htmlFor='profile' 
                        className='btn btn-white rounded-pill'
                    >
                        {locale('change_image')}
                    </label>
                </div>
            </div>
            <div className='row g-4'>
                <div className='col-sm-6'>
                    <Input 
                        label={locale('contact_page.first_name')}
                        id='f_name' 
                        className={classNames(
                            'form-control',
                            errors?.firstName && 'is-invalid'
                        )}
                        {...register('firstName', {required: true})}
                    />
                    {<ErrorHandler root={errors?.firstName as any} />}
                </div>
                <div className='col-sm-6'>
                    <Input 
                        label={locale('contact_page.last_name')}
                        id='l_name' 
                        className={classNames(
                            'form-control',
                            errors?.lastName && 'is-invalid'
                        )}
                        {...register('lastName', {required: true})}
                    />
                    {<ErrorHandler root={errors?.lastName as any} />}
                </div>
                <div className='col-sm-6'>
                    <Input 
                        label={locale('display_name')}
                        id='d_name' 
                        className={classNames(
                            'form-control',
                            errors?.displayName && 'is-invalid'
                        )}
                        {...register('displayName', {required: true})}
                    />
                    {<ErrorHandler root={errors?.displayName as any} />}
                </div>
                <div className='col-sm-6'>
                    <Input 
                        label={locale('location')}
                        id='location' 
                        className={classNames(
                            'form-control',
                            errors?.location && 'is-invalid'
                        )}
                        {...register('location', {required: true})}
                    />
                    {<ErrorHandler root={errors?.location as any} />}
                </div>
                <div className='col-12'>
                    <Input
                        as='textarea'
                        label={locale('about')}
                        id='description' 
                        className='form-control' 
                        placeholder='Write here...' 
                        style={{minHeight: 100}}
                        {...register('description')}
                    />
                </div>
            </div>
            <button 
                type='submit' 
                className={classNames(
                    'mt-4 btn btn-primary btn-loading',
                )}
            >
                {locale('save_changes')}
            </button>
        </form>
    )
}


ProfileForm.displayName = 'ProfileForm'
export default ProfileForm