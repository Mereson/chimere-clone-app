import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Userpage from "./Pages/Userpage"
import ErrorPage from "./Pages/ErrorPage"
import Homepage from "./Pages/Homepage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Userpage />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/src/Pages/Homepage.js",
    element: <Homepage/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
