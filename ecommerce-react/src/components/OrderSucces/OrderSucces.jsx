import React from 'react';
import "./OrderSucces.css"

const OrderSuccess = ({ orderId }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(orderId);
        // Aquí podrías agregar una notificación de "copiado"
    };

    return (
        <div className="order-success-container">
            <div className="order-success-wrapper">
                {/* Icono animado de éxito */}
                <div className="success-icon-container">
                    <div className="success-icon">
                        <div className="checkmark">
                            <div className="checkmark-circle"></div>
                            <div className="checkmark-stem"></div>
                            <div className="checkmark-kick"></div>
                        </div>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="success-content">
                    <h2 className="success-title">¡Orden Generada Correctamente!</h2>
                    <p className="success-subtitle">Tu pedido ha sido procesado exitosamente</p>
                    
                    {/* Card del ID de orden */}
                    <div className="order-id-card">
                        <div className="order-id-header">
                            <span className="order-id-label">ID de tu orden: {orderId} </span>
                        </div>
                        <div className="order-id-content">
                            <span className="order-id-value">{orderId}</span>
                            <button 
                                className="copy-btn"
                                onClick={copyToClipboard}
                                title="Copiar ID de orden"
                            >
                                📋
                            </button>
                        </div>
                    </div>

                    {/* Información adicional */}
                    <div className="info-section">
                        <div className="info-item">
                            <div className="info-icon">📧</div>
                            <p>Te enviaremos un email de confirmación</p>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">🚚</div>
                            <p>Podrás rastrear tu pedido con este ID</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;