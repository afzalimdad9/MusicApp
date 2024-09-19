/**
 * @name Dropzone
 * @file dropzone.tsx
 * @description dropzone component
 */
"use client"


// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { DropzoneOptions, useDropzone } from 'react-dropzone'
import { useTranslations } from 'next-intl'
import { RiUploadCloud2Line } from '@remixicon/react'

interface DropzoneProps
extends DropzoneOptions {
    title?: string
    infoText?: string
    label?: string
    multiple?: boolean
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const propTypes = {
    /**
     * Dropzone title
     */
    title: PropTypes.string,

    /**
     * Dropzone information text
     */
    infoText: PropTypes.string,

    /**
     * Button label
     */
    label: PropTypes.string,

    /**
     * Set multiple file upload option
     */
    multiple: PropTypes.bool,

    /**
     * Dropzone `onChange` event
     */
    onChange: PropTypes.func
}


const Dropzone: React.FC<DropzoneProps> = (
    {
        title,
        infoText = '540x320 (Max: 300KB)',
        label,
        multiple,
        onChange,
        ...props
    }
) => {

    const {getRootProps, getInputProps, open} = useDropzone({
        multiple,
        noClick: true,
        ...props
    })
    const locale = useTranslations()

    if (!title) title = locale('drag_and_drop_upload')
    if (!label) label = locale('upload_cover_image')
    

    return (
        <div className='dropzone text-center' {...getRootProps()}>
            <input {...getInputProps({ onChange })} />
            <div className='dz-message'>
                <RiUploadCloud2Line className='text-gray' size={40} />
                <div className='fs-6 mt-2'>{title}</div>
                <div className='form-text mb-4'>{infoText}</div>
                <button 
                    type='button' 
                    className='btn btn-light-primary' 
                    onClick={open}
                >
                    {label}
                </button>
            </div>
        </div>
    )
}


Dropzone.propTypes = propTypes as any
Dropzone.displayName = 'Dropzone'

export default Dropzone