import React, { useContext } from 'react'
// import { resolveConfig } from 'vite'
import { CalcContext } from '../context/CalcContext'

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
    const { calc, setCalc } = useContext(CalcContext)

    const dotClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.')
                ? calc.num + value
                : calc.num,
        })
    }

    const btnClick = () => {
        const results = {
            '.': dotClick,
        }
        return results[value]()
    }

    return (
        <button onClick={btnClick} className={`${getButtonType(value)} button`}>
            {value}
        </button>
    )
}

export default Button
