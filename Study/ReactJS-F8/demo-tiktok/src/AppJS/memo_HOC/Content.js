import { memo } from "react"

function Content({ count }) {
    console.log('re-render');

    return (
        <h2>Hello ae {count}</h2>
    )
}

export default memo(Content)