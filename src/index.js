import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.scss';
import PageSignIn from './pages/pageSignIn';
import PageDashboard from './pages/pageDashboard';
import Page404 from './pages/page404';

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		<React.StrictMode>
			<RouterProvider router={createBrowserRouter([
				{ path: "/", element: <PageSignIn />, },
				{ path: "/dashboard", element: <PageDashboard />, },
				{ path: "/404", element: <Page404 />, },
			])} />
		</React.StrictMode>
	);
