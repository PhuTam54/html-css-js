import { useEffect, useState } from "react"

// 3 trường hợp sử dụng
// 1. useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
//  - Chỉ gọi callback 1 lần sau khi componet mounted
// 3. useEffect(callback, [deps])

// Notes
// 1. Callback luôn được gọi sau khi component mounted

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content