import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
// import ErrorPage from './pages/ErrorPage';
import Auth from './utils/auth.js';
import SearchBooks from './pages/SearchBooks.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/myProfile',
        element: Auth.loggedIn() ? <ProfilePage /> : <Home />
      },
      {
        path: '/searchBooks',
        element: <SearchBooks />

      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
