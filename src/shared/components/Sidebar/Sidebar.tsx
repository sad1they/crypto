import React from 'react'
import styles from './Sidebar.module.scss'
import { Logo } from '@/assets/images'

const Sidebar: React.FC = () => {
    return (
        <>
            <div className={styles.sidebar__logo}>
                <Logo className={styles.sidebar__logo__img} />
                <span className={styles.sidebar__logo__text}>Crypto Crack</span>
            </div>
            <div>Menu</div>
            <div>External</div>
        </>
    )
}

export default Sidebar
