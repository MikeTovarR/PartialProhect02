import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { Routes, Route } from 'react-router-dom';

export default function App(){

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/Resume" element={<Resume />} />;
      </Routes>
    </div>
  );
}
