import React from 'react'

const Wrapper = ({ children, dark }) => {
    // prettier-ignore
    return <div className={`${dark ? 'dark' : ''} wrapper`}>{children}</div>
}

export default Wrapper
