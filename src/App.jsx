import './App.css'
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
    return (
        <CalcProvider>
            <Wrapper>
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
