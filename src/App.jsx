import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Layout from './Component/Layout';

function App() {
	const router = createBrowserRouter([
		{
			path: '', element: <Layout />,
			children: [
				{ path: "", element: <Home /> },
				{ path: 'about', element: <About /> },
				{ path: 'portfolio', element: <Portfolio /> },
				{ path: 'contact', element: <Contact /> },
				{ path: "*", element: <div className='d-flex justify-content-center align-items-center vh-100 bg-black text-white'>
					<h1>404 NOT FOUND</h1>
				</div> }
			]
		}
	])

	return <RouterProvider router={router} />
}

export default App
