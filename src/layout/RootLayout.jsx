import React from 'react'
import Navbar from '../components/navigation-bar/Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default RootLayout