import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route path="/" element={<ItemListContainer props={'Bienvenidos a Magic Store'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h1>PAGE NOT FOUND: 404</h1>} />

        </Routes>  
      </BrowserRouter>
    </div>
      
  );
}

export default App;
