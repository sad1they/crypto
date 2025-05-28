import type { RouteObject } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard'
import Wallet from '@/pages/Wallet'
import Settings from '@/pages/Settings'
import Layout from '@/layouts'
import Documentation from '@/pages/Documentation'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'wallet',
                element: <Wallet />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
        ],
    },
    {
        path: '/documentation',
        element: <Documentation />,
    },
]
