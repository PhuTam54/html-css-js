import { useState, useCallback } from 'react'
import Content from './Content'

// 1. memo() -> Higher Order component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div style={{ padding: 32 }}>
      <Content onIncrease={handleIncrease}/>
      <h1>{count}</h1>
    </div>
  )
}

export default App;