import Sidebar from '@/shared/components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
