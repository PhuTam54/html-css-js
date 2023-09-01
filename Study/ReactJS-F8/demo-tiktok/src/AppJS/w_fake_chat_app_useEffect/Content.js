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
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

const lessons = [
    {
        id: 1,
        name: 'React JS'
    },
    {
        id: 2,
        name: 'SPA/MPA'
    },
    {
        id: 3,
        name: 'Arrow Function'
    }
]

function Content() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        // Cleanup
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)

        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content