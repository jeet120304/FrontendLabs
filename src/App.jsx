import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home/Home'
import Subjects from './components/questions/Subjects'
import HtmlQuestion from './components/questions/HTMLQuestions/HtmlQuestion'
function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<Dashboard/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/subjects",
          element:<Subjects/>,
          children:[
            {
              path:"/subjects/html",
              element:<HtmlQuestion/>
            }
          ]
        },
      ]
    }
  ])

  return <RouterProvider router={route}/>
}

export default App
