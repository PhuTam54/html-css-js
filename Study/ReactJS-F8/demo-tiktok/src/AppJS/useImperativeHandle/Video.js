import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './videos/RapLove.mp4'

function Video(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref={videoRef}
            width={150}
            src={video1}
        />
    )
}

export default forwardRef(Video)