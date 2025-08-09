import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./styles/global.css";
import "./styles/index.scss";
import PageSignIn from './pages/pageSignIn.jsx';
import Page404 from './pages/page404.jsx';
import PageDashRegional from './pages/pageDashRegional.jsx';
import PageDashDUT from './pages/pageDashDUT.jsx';
import PageHome from './pages/pageHome.jsx';
import PageLayout from './pages/pageLayout.jsx';

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
