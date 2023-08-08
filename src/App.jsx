import './App.css'
import { useState } from 'react'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonsSection from './components/ButtonsSection'
import Button from './components/Button'
import CalcProvider from './context/CalcContext'

const btnVals = [
    ['AC', '+-', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
]

function App() {
    const [dark, setDark] = useState(true)

    const handleClick = () => {
        setDark(!dark)
        document.body.classList.toggle('dark-body')
    }

    return (
        <CalcProvider>
            <button className="theme-button" onClick={handleClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="moon-icon"
                >
                    <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
            </button>
            <Wrapper dark={dark}>
                <Screen />
                <ButtonsSection>
                    {btnVals.flat().map((btn, i) => (
                        <Button value={btn} key={i} />
                    ))}
                </ButtonsSection>
            </Wrapper>
        </CalcProvider>
    )
}

export default App
