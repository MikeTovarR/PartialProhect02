import './App.css';
import Home from './pages/Home';
import ResumeFabian from './pages/ResumeFabian';
import ResumeMike from './pages/ResumeMike';
import { Routes, Route } from 'react-router-dom';
import {MyProvider} from './DataContext.js';

export default function App(){

  return(
    <MyProvider >
      <div>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/Resume/Fabian" element={<ResumeFabian />} />;
          <Route path="/Resume/Mike" element={<ResumeMike />} />;
        </Routes>
      </div>
    </MyProvider >
  );
};
