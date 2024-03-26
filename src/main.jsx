import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import ErrorPage from './components/ErrorPage';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import BookDetails from './components/BookDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: () => fetch('./books.json'),
        element: <Home />,
      },
      {
        path: '/book/:BookId',
        loader: () => fetch('./books.json'),
        element: <BookDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
