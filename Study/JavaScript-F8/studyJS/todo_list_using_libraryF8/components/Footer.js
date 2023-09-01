import html from '../core.js'

function Footer() {
    return html`
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <!-- Remove the below line ↓ -->
            <!-- Change this out with your name and url ↓ -->
            <p>Created by <a href="http://facebook...">Phu Tam</a></p>
        </footer>
    `
}

export default Footer