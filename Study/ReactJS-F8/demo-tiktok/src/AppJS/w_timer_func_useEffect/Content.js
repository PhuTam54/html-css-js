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


function Content() {
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState -1)
            console.log('Countdown');
        }, 1000)

        // Cleanup function
        return () => clearInterval(timerId)
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content