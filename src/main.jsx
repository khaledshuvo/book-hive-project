import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import ErrorPage from './components/ErrorPage';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import BookDetails from './components/BookDetails';
import ListedBooks from './components/ListedBooks';
import ReadBooks from './components/ReadBooks';
import Wishlist from './components/Wishlist';
import PagesToRead from './components/PagesToRead';
import Terms from './components/Terms';
import ContactUs from './ContactUs';

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
      {
        path: '/listed-books',
        loader: () => fetch('./books.json'),
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
            loader: () => fetch('./books.json'),
          },
          {
            path: 'wishlist',
            element: <Wishlist />,
            loader: () => fetch('./books.json'),
          },
        ],
      },
      {
        path: '/pages-to-read',
        loader: () => fetch('./books.json'),
        element: <PagesToRead />,
      },
      {
        path: '/terms',
        element: <Terms/>
      },
      {
        path: '/contact-us',
        element: <ContactUs/>,
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
