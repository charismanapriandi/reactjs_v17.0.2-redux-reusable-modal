import React from 'react'

const Button = ( { 
        label,
        danger, 
        primary, 
        warning, 
        secondary, 
        ...rest
    } ) => {

    return (
        <button 
            {...rest} 
            className=
                {`
                    w-full rounded-sm py-2 px-4 focus:outline-none text-white 
                    ${primary ? 'bg-blue-600' : ''}
                    ${secondary ? 'bg-gray-500' : ''}
                    ${danger ? 'bg-red-600' : ''}
                    ${warning ? 'bg-yellow-500' : ''}
                `}
        >
            {label}
        </button>
    )
}

export default Button
