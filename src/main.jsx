import React from 'react'
import ReactDOM from 'react-dom/client'
import { SigninPage } from "./Pages/Forms/Signin"
import { SignupPage } from "./Pages/Forms/Signup"
import { MainPage } from './Pages/Home/MainPage'
import { ErrorPage } from './Pages/ErrorPage'
import { TaskManager } from './Pages/Home/TaskManager'
import "./styles/global.css"

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  console.log("isAuth:", isAuthenticated);

  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

const router = createBrowserRouter([
  {
    path: "ToDoApp/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "ToDoApp/:id",
        element: 
        <PrivateRoute redirectTo={"/signin"}>
          <TaskManager />
        </PrivateRoute>
      },
      {
        path: "ToDoApp/signin",
        element: <SigninPage />
      },
      {
        path: "ToDoApp/signup",
        element: <SignupPage />
      },
      {
        path: "ToDoApp/",
        element: <Navigate to="/:0" />,
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
