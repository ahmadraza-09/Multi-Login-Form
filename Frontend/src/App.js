import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Regitration from './pages/regitration';
import PageOne from './pages/pageone';
import PageTwo from './pages/pagetwo';
import PageThree from './pages/pagethree';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Regitration/>}/>
        <Route path='/pageone' element={<PageOne/>}/>
        <Route path='/pagetwo' element={<PageTwo/>}/>
        <Route path='/pagethree' element={<PageThree/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
