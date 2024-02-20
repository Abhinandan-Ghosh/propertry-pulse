import React from 'react'
import '@/assets/styles/global.css'

export const metadata = {
    title: "Property Pulse | Find your dream rental property",
    description: "Find your dream rental property",
    keyword: "find property, rent property, rental",
}

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div> {children} </div>
            </body>
        </html>


    )
}

export default MainLayout