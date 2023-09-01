import { useStore, actions } from "./store"
import { useRef } from "react"

function App() {
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state

    const inputRef = useRef()

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setToDoInput(''))

        inputRef.current.focus()
    }

    return (
        <div style={{ padding: 10 }}>
            <h3>Todo List</h3>
            <input
                ref={inputRef}
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(actions.setToDoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <span 
                        onClick={() => dispatch(actions.deleteTodo(index))}
                        >&times;
                    </span>
                </li>
            ))}
        </div>
    )
}

export default App