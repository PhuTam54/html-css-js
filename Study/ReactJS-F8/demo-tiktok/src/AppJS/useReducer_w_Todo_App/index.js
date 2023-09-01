import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob} from './actions'
import logger from './logger'

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  return (
    <div style={{ padding: 32 }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo...'
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button
        onClick={handleSubmit}
      >
        Add
      </button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;