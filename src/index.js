import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import ElementList, { loader as ElementListLoader } from './components/ElementList/ElementList';
import Element, { loader as ElementLoader } from './components/Element/Element';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: 'elements/:elementId',
    element: <ElementList/>,
    loader: ElementListLoader
  },
  {
    path: 'element/:elementName', // element/abbr
    element: <Element/>,
    loader: ElementLoader
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
