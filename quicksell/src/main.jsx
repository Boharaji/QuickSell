import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './containers/Home/Home.jsx'
import './index.css'

const router = createBrowserRouter([
	{
        path: '/',
        element: <Home />
    },
    // {
    //     path: '*',
    //     element: <Error />
    // }
])

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)