import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

export default function App(){

  // const routes = createBrowserRouter([
  //   { path: "/pages", element: <Home />, },
  //   { path: "/pages", element: <Resume />, },
  // ]);
  
  // return (<RouterProvider routes={routes}/>);
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/Resume" element={<Resume />} />;
      </Routes>
    </div>
  );
}
