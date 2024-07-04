import {AppHeader} from '@/widgets/header'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {memo, ReactNode} from 'react'
import './globals.css'
const inter = Inter({subsets: ['cyrillic', 'latin']})

export const metadata: Metadata = {
    title: 'Moscow LIVE',
    description: 'Лучшая радиостанция Рублёвки',
}

interface Props {
    children: ReactNode
    leftColumn: ReactNode
    rightColumn: ReactNode
}

const RootLayout = ({children, leftColumn, rightColumn}: Props) => {
    return (
        <html lang='ru'>
            <body className={inter.className}>
                <AppHeader />
                <main className='h-app-content grid grid-cols-3'>
                    {leftColumn}
                    {children}
                    {rightColumn}
                </main>
            </body>
        </html>
    )
}

export default memo(RootLayout)
