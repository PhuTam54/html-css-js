import html from '../core.js'
import { connect } from '../store.js'

function FooterTodo({ todos, filter, filters }) {
    return html`
        <!-- This footer should hidden by default and shown when there are todos -->
        <footer class="footer">
            <!-- This should be 0 items left by default -->
            <span class="todo-count">
                <strong>${todos.filter(filters.active).length}</strong> item left
            </span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
                ${Object.keys(filters).map(type => html`
                    <li>
                        <a 
                            class="${filter === type && 'selected'}" 
                            href="#"
                            onclick="dispatch('switchFilter', '${type}')"
                        >
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>
                `)}
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            ${todos.filter(filters.completed).length > 0 && 
                html`
                    <button 
                        class="clear-completed"
                        onclick="dispatch('clearCompleted')"
                    >Clear completed</button>
                `
            }
            
        </footer>
    `
}

export default connect()(FooterTodo)