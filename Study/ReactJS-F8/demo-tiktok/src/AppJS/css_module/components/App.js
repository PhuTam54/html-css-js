import Paragraph from "./Paragraph"
import Heading from "./Heading"
import GlobalStyles from "./GlobalStyles"

function App() {
    return (
        <GlobalStyles>
            <div style={{ padding: '0 32px' }}>
                <Heading />
                <Paragraph />
            </div>
            <div className="d-flex">
                <div>Item1</div>
                <div>Item2</div>
            </div>
        </GlobalStyles>
    )
}

export default App