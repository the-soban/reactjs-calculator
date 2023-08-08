import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
import { Textfit } from 'new-react-textfit'

const Screen = () => {
    const { calc } = useContext(CalcContext)

    return <Textfit className="screen">3423487079865</Textfit>
}

export default Screen
