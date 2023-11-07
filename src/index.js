import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.scss';
import PageSignIn from './pages/pageSignIn';
import Page404 from './pages/page404';
import PageRegional from './pages/pageRegional';
import PageGateways from './pages/pageGateways';
import PageHome from './pages/pageHome';

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		<React.StrictMode>
			<RouterProvider router={createBrowserRouter([
				{ path: "/regional", element: <PageRegional />, },
				{ path: "/gateways", element: <PageGateways />, },
				{ path: "/signin", element: <PageSignIn />, },
				{ path: "/login", element: <Navigate to="/signin" /> },
				{ path: "/", element: <PageHome />, },
				{ path: "/404", element: <Page404 />, },
			])} />
		</React.StrictMode>
	);
