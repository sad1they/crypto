import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowTrendUp, Home, Logo, Setting, Wallet } from '@/assets/images'
import styles from './Sidebar.module.scss'

const Sidebar: React.FC = () => {
    return (
        <>
            <div className={styles.sidebar__logo}>
                <NavLink className={styles.sidebar__logo__text} to='/'>
                    <Logo className={styles.sidebar__logo__img} />
                    Crypto Crack
                </NavLink>
            </div>
            <div className={styles.sidebar__links}>
                <ul className={styles.sidebar__links__menu}>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? styles[
                                          'sidebar__links__menu__item--active'
                                      ]
                                    : styles['sidebar__links__menu__item']
                            }
                            to='/'
                        >
                            <Home />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? styles[
                                          'sidebar__links__menu__item--active'
                                      ]
                                    : styles['sidebar__links__menu__item']
                            }
                            to='/wallet'
                        >
                            <Wallet />
                            Wallet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? styles[
                                          'sidebar__links__menu__item--active'
                                      ]
                                    : styles['sidebar__links__menu__item']
                            }
                            to='/settings'
                        >
                            <Setting />
                            Settings
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles.sidebar__links__external}>
                    <li>
                        <NavLink
                            to='/documentation'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Documentation
                            <ArrowTrendUp />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='https://t.me/sadizey'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Telegram
                            <ArrowTrendUp />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
