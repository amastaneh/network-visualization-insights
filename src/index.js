import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.scss';
import PageSignIn from './pages/pageSignIn';
import Page404 from './pages/page404';
import PageDashRegional from './pages/pageDashRegional';
import PageDashDUT from './pages/pageDashDUT';
import PageHome from './pages/pageHome';
import PageLayout from './pages/pageLayout';

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		<React.StrictMode>
			<RouterProvider router={createBrowserRouter([
				{
					path: "/",
					element: <PageLayout />,
					children: [
						{ index: true, element: <PageHome /> },
						{ path: "regional", element: <PageDashRegional /> },
						{ path: "dut", element: <PageDashDUT /> },
						{ path: "signin", element: <PageSignIn /> },
						{ path: "login", element: <Navigate to="/signin" /> },
						{ path: "*", element: <Page404 /> },
					],
				},
			])} />
		</React.StrictMode>
	);
