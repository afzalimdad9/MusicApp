/**
 * @name Input
 * @file input.tsx
 * @description input component
 */
"use client"


// Modules
import React from 'react'
import PropTypes from 'prop-types'

type InputElementTypes = HTMLInputElement | HTMLTextAreaElement

interface InputProps 
extends React.HTMLAttributes<InputElementTypes> {
    as?: React.ElementType
    type?: string
    label?: string
    placeholder?: string
}

const propTypes = {
    /**
     * @default 'input'
     * The underlying HTML element to use when rendering the Input.
     *
     * @type ('input'|'textarea'|elementType)
     */
    as: PropTypes.elementType,

    /**
     * The HTML input `type`, which is only relevant if `as` is `'input'` (the default).
     */
    type: PropTypes.string,

    /**
     * Set input label 
     */
    label: PropTypes.string,
}


const Input: React.FC<InputProps> = 
React.forwardRef<InputElementTypes, InputProps>((
    {
        as: Component = 'input',
        type = 'text',
        label,
        id,
        placeholder,
        ...props
    },
    ref
) => {

    const attr = Component === 'input' ? {type: type} : {}


    return (
        <>
            {label && (
                <label htmlFor={id} className='form-label fw-medium'>
                    {label}
                </label>
            )}
            <Component 
                ref={ref}
                id={id} 
                placeholder={placeholder} 
                {...attr} 
                {...props} 
            />
        </>
    )
})


Input.propTypes = propTypes as any
Input.displayName = 'Input'

export default Input