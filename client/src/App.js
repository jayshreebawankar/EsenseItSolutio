import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Navabar from './Component/Navabar.js'
import Home from './Component/Home.js'
import Register from './Component/Register.js'

function App() {
  return (  
    <>
      {/* <Navabar  /> */}
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </>
  );
}
export default App;
