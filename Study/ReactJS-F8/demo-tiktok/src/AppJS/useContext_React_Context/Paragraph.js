import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {
    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Context provides a way to pass data through 
        </p>
    )
}

export default Paragraph