import {memo} from 'react'

interface Props {}

export const AppHeader = memo(({}: Props) => {
    AppHeader.displayName = 'AppHeader'
    return <div className='h-app-header'>AppHeader</div>
})
