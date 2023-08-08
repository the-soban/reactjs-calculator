import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
import { Textfit } from 'new-react-textfit'

const Screen = () => {
    const { calc } = useContext(CalcContext)

    return (
        <Textfit className="screen dark">
            {calc.num ? calc.num : calc.res}
        </Textfit>
    )
}

export default Screen
