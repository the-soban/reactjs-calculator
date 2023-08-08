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

    const acClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
    }

    const numClick = () => {
        const numString = value.toString()

        let numValue
        if (numString === '0' && calc.num === 0) {
            numValue = '0'
        } else {
            numValue = Number(calc.num + numString)
        }

        setCalc({
            ...calc,
            num: numValue,
        })
    }

    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0,
        })
    }

    const equalsClick = () => {
        if (calc.res && calc.num) {
            const math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    // prettier-ignore
                    'x': (a, b) => a * b,
                    '/': (a, b) => a / b,
                }
                return result[sign](a, b)
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0,
            })
        }
    }

    const btnClick = () => {
        const results = {
            '.': dotClick,
            // prettier-ignore
            'AC': acClick,
            '/': signClick,
            // prettier-ignore
            'x': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalsClick,
        }
        if (results[value]) {
            return results[value]
        } else {
            return numClick()
        }
    }

    return (
        <button onClick={btnClick} className={`${getButtonType(value)} button`}>
            {value}
        </button>
    )
}

export default Button
