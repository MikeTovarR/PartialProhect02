import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import ResumeMike from './pages/ResumeMike';
import { Routes, Route } from 'react-router-dom';
import {MyProvider} from './DataContext.js';

export default function App(){

  return(
    <MyProvider >
      <div>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/Resume" element={<Resume />} />;
        </Routes>
      </div>
    </MyProvider >
  );
};
