import {memo} from 'react'

interface Props {}

const Page = memo(({}: Props) => {
    Page.displayName = 'Page'
    return <div>Право</div>
})
export default Page
