import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Add from './Component/Add';
import Update from './Component/Update';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add' element={<Add />}></Route>
      <Route path='/Update/:id' element={<Update />}></Route>
    </Routes>
  )
};

export default App;
