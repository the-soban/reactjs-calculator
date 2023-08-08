import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
import Wrapper from './Wrapper'

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

    //user clicks point
    const dotClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.')
                ? calc.num + value
                : calc.num,
        })
    }

    //user clicks AC
    const acClick = () => {
        setCalc({
            sign: '',
            num: 0,
            res: 0,
        })
    }

    //user clicks number
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

    //user clicks sign

    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0,
        })
    }

    //user clicks equals
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
            })
        }
    }

    //user clicks percentage button
    const percentClick = () => {
        setCalc({
            // prettier-ignore
            num: (calc.num / 100),
            // prettier-ignore
            res: (calc.res / 100),
            sign: '',
        })
    }

    //user clicks invert
    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: '',
        })
    }

    const handleBtnClick = () => {
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
            '%': percentClick,
            '+-': invertClick,
        }
        if (results[value]) {
            return results[value]()
        } else {
            return numClick()
        }
    }

    // prettier-ignore
    return (
            <button onClick={handleBtnClick} className={`${getButtonType(value)} button`}>{value}</button>
    );
}

export default Button
