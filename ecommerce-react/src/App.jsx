import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const saludo = "Productos destacados";
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const clearSearch = () => {
        setSearchQuery("");
    };

    return (
      <BrowserRouter>
        <div className="app-container">
        <NavBar 
                onSearch={handleSearch} 
                onClearSearch={clearSearch}
                searchQuery={searchQuery}
          />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo={saludo} searchQuery={searchQuery}/>} />
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="*" element={<div>Error 404</div>} />
          </Routes>

        </div>
      </BrowserRouter>


    );
}

export default App;
