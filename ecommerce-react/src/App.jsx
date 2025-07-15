import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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
        <div className="app-container">
            <NavBar 
                onSearch={handleSearch} 
                onClearSearch={clearSearch}
                searchQuery={searchQuery}
            />
            <ItemListContainer 
                saludo={saludo} 
                searchQuery={searchQuery}
            />
            <div className="card">
                <p>
                    Aprendiendo a usar ReactJs
                </p>
            </div>
        </div>
    );
}

export default App;
