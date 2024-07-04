import {memo} from 'react'

interface Props {}

const Page = memo(({}: Props) => {
    Page.displayName = 'Page'
    return <div>Лево</div>
})
export default Page
