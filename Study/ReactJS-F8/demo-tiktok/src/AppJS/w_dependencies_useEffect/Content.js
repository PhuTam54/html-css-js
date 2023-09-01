import { useEffect, useState } from "react"

// 3 trường hợp sử dụng
// 1. useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
//  - Chỉ gọi callback 1 lần sau khi componet mounted
// 3. useEffect(callback, [deps])
//  - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

// Notes chung
// 1. Callback luôn được gọi sau khi component mounted

const tabs = ['posts', 'comments', 'users', 'albums', 'photos', 'todos']

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
        document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >{tab}
                </button>
            ))}
            <br />
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content