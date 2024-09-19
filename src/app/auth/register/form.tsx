/**
 * @name RegisterForm
 * @file form.tsx
 * @description register form component
 */
"use client"


// Modules
import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { RiGoogleFill } from '@remixicon/react'
import { useLocalStorage } from 'usehooks-ts'

// Contexts
import { useTheme } from '@/core/contexts/theme'

// Components
import Input from '@/core/components/input'
import ErrorHandler from '@/core/components/error'

// Utilities
import { postData } from '@/core/utils/api-call'
import { PASSWORD } from '@/core/constants/regex'
import { SUCCESSFUL } from '@/core/constants/codes'
import { USER_KEY } from '@/core/constants/constant'
import { RegisterTypes } from '@/core/types'


const RegisterForm: React.FC = () => {

    const router = useRouter()
    const [, saveUser] = useLocalStorage<any>(USER_KEY, null)
    const {replaceClassName} = useTheme()
    const auth = useTranslations('auth')
    const { 
        register, 
        handleSubmit,
        formState: { 
            errors,
            isSubmitting
        } 
    } = useForm<RegisterTypes>({
        defaultValues: {
            agreed: true
        }
    })


    /**
     * 
     * Handle form `onSubmit` event
     * @param data 
     */
    const submitForm = async (data: RegisterTypes) => {
        await postData('/api/register', data).then(result => {
            if (result.status === SUCCESSFUL) {
                saveUser(data)
                router.push('/music')
            }
        })
    }

    /**
     * 
     * Handle Google login `onClick` event
     */
    const loginWithGoogle = () => {
        // Do google login code here.
    }


    return (
        <form className='mt-5' onSubmit={handleSubmit(submitForm)}>
            <div className='mb-5'>
                <button type='button' className='btn btn-white w-100' onClick={loginWithGoogle}>
                    <span className='btn__wrap'>
                        <RiGoogleFill />
                        <span className={replaceClassName('ms-2')}>
                            Register with Google
                        </span>
                    </span>
                </button>
            </div>
            <div className='mb-4'>
                <div className='auth__or mx-auto fw-medium'></div>
            </div>
            <div className='mb-3'>
                <Input 
                    label={auth('username')}
                    id='username' 
                    className={classNames(
                        'form-control',
                        errors?.username && 'is-invalid'
                    )}
                    {...register('username', { 
                        required: true, 
                        minLength: { value: 5, message: '5' } 
                    })}
                />
                {<ErrorHandler root={errors?.username as any} />}
            </div>
            <div className='mb-3'>
                <Input 
                    label={auth('password')}
                    id='password' 
                    type='password'
                    className={classNames(
                        'form-control',
                        errors?.password && 'is-invalid'
                    )}
                    {...register('password', { 
                        required: true, 
                        pattern: { value: PASSWORD, message: 'password' } 
                    })}
                />
                {<ErrorHandler root={errors?.password as any} />}
            </div>
            <div className='mb-3'>
                <Input 
                    label={auth('confirm_password')}
                    id='c_password' 
                    type='password'
                    className={classNames(
                        'form-control',
                        errors?.cPassword && 'is-invalid'
                    )}
                    {...register('cPassword', { 
                        required: true, 
                        pattern: { value: PASSWORD, message: 'password' } 
                    })}
                />
                {<ErrorHandler root={errors?.cPassword as any} />}
            </div>
            <div className='mb-4'>
                <div className='form-check mb-0'>
                    <input 
                        className='form-check-input' 
                        type='checkbox' 
                        id='agree' 
                        {...register('agreed', { required: true })}
                    />
                    <label className='form-check-label' htmlFor='agree'>
                        {auth('agree')} <Link href='/'>Terms & Condition</Link>
                    </label>
                </div>
            </div>
            <div className='mb-5'>
                <button 
                    type='submit' 
                    className={classNames(
                        'btn btn-primary w-100 btn-loading',
                        isSubmitting && 'active'
                    )}
                    disabled={isSubmitting}
                >
                    {auth('register')}
                </button>
            </div>
            <p>{auth('register_text')} <br />
                <Link href='/auth/login' className='fw-medium'>{auth('login')}</Link>
            </p>
        </form>
    )
}


RegisterForm.displayName = 'RegisterForm'
export default RegisterForm