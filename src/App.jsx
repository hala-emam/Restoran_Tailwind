
import { BrowserRouter as Router,Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Service from './components/Service';
import PageLayout from './components/PageLayout';

function App() {
  const router=createBrowserRouter([{path:'/',element:<PageLayout/>,children:[
    {path:"/" ,element:<Home />},
    {path:'/About',element:<About />},
    {path:'/Service',element:<Service />},
    {path:'/Menu',element:<Menu />},
    {path:'/Contact',element:<Contact />},

  ]}])
  return (
    <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;