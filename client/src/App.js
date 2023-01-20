import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Suppliers from './pages/Suppliers';
import Customers from './pages/Customers';
import Inventory from './pages/Inventory';

import Sample from './components/Sample';


function App() {
  return (
    <>
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='' element={<Inventory />}> </Route>
        <Route path='contacts/customers' element={<Customers />} > </Route>
        <Route path='contacts/suppliers' exact element={<Suppliers/>} ></Route>
        <Route path='inventory' exact element={<Inventory />} ></Route> 
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
