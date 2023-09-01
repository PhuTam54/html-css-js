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
// 2. Cleanup function luôn được gọi trước khi component unmounted

const tabs = ['posts', 'comments', 'users', 'albums', 'photos', 'todos']

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                // show
                setShowGoToTop(true)
            } else {
                // hide
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Resize
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    // return {width}

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
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right:20,
                        bottom: 20
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content