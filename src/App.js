import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Products/>} /> 
    <Route path='*' element={<Error/>} /> 
  </Routes>
  </BrowserRouter>;
}

export default App;
