import React from 'react'
import Wrapper from './Wrapper'

const ButtonsSection = ({ children }) => {
    return (
        <>
            <div className="buttons-section">{children}</div>
            <button
                // onClick={this.classList.toggle('dark')}
                className="theme-switch"
            >
                Switch
            </button>
        </>
    )
}

export default ButtonsSection
