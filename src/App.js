import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contuct from './Components/Contuct/Contuct';
import Error from './Components/Error/Error';
import FooterGetData from './Components/FooterGetData/FooterGetData';
import Home from './Components/Home/Home';
import CollapsibleExample from './Components/Navbar/Navbar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <CollapsibleExample></CollapsibleExample>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contuct' element={<Contuct></Contuct>}></Route>
          <Route path='/item' element={<FooterGetData></FooterGetData>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
