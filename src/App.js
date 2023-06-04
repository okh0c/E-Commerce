import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartContent/CartWidget';
import DataProvider from './components/Context/DataContext';

function App() {
  return (
  <DataProvider>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cart" element={<CartWidget />} />
      </Routes>
    </BrowserRouter>
  </DataProvider>
  );
}
 
export default App;
