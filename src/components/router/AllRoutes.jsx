import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Params from './Params'
import GithubInfo, { githubInfoRouteLoader } from './GithubInfo'

const AllRoutes = () => {

//  const router= createBrowserRouter([
//       {
//         path:"/",
//         element:<Layout/>,
//         children:[
//              {
//                 path:"",
//                 element: <Home/>
//              },
//              {
//                path:"about",
//                element: <About/>

//              },
//              {
//                 path:"contact",
//                 element: <Contact/>
//              }
//         ]
//       }
//  ])   
 
  const router= createBrowserRouter(
       createRoutesFromElements(
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='user/:id' element={<Params/>}/>
                <Route 
                loader={githubInfoRouteLoader}
                path='github'
                 element={<GithubInfo/>}/>


            </Route>
       )
  )
  return (
     <RouterProvider router={router} />
  )
}

export default AllRoutes
