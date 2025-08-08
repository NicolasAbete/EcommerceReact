import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Producto no encontrado</h2>
                <p className="not-found-description">
                    Lo sentimos, el producto que buscas no existe o ha sido eliminado del catálogo.
                </p>
                <div className="not-found-actions">
                    <Link to="/" className="btn-primary">
                        Volver al inicio
                    </Link>
                    <Link to="/" className="btn-secondary">
                        Ver todos los productos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;