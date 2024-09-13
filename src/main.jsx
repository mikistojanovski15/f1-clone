import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import VideoPage from './routes/VideoPage.jsx'
import DriversPage from './routes/DriversPage.jsx'
import DriverPage from './components/DriverPage.jsx'

// https://openf1.org/#laps

// implement laps on results
// make it preaty

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/video',
        element: <VideoPage />,
      },
      {
        path: '/drivers',
        element: <DriversPage />,
      },
      {
        path: '/driver/:id',
        element: <DriverPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
