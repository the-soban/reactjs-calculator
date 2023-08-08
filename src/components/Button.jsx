import React from 'react'

const getButtonType = (btn) => {
    const className = {
        '=': 'equals',
        // prettier-ignore
        'x': 'opt-button',
        '-': 'opt-button',
        '+': 'opt-button',
        '/': 'opt-button',
        // prettier-ignore
        'AC': 'fn-button',
        '+-': 'fn-button',
        '%': 'fn-button',
    }
    return className[btn]
}

const Button = ({ value }) => {
    return <button className={`${getButtonType(value)} button`}>{value}</button>
}

export default Button
