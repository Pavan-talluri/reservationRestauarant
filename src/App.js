import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Restaurant from './pages/restaurant/Restaurant';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/restaurants" element={<List/>}/>
          <Route path="/restaurants/:id" element={<Restaurant/>}/>
          <Route path='/login' element={<Login />}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
