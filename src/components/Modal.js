import React from 'react'


const Modal = ({ title, content, bgClass, modalClass }) => {
    return (
        <div>
            {/* Background Modal  */}
            <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black transition-all duration-700 ease-in-out ${bgClass}`}/>
            {/* Modal  */}
            <div className={`fixed p-4 bg-white 
                        left-1/2 rounded-sm border-1 border-theme-dark-gray transform 
                        -translate-x-1/2 transition-all duration-700 ease-in-out ${modalClass}`}>
                <div className="flex justify-between">
                    <p className="font-bold">{title}</p>
                </div>
                {content}
            </div>
        </div>
    )
}

export default Modal
