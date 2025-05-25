import Sidebar from '@/shared/components/Sidebar'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const Layout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
