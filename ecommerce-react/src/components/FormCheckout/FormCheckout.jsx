import "./FormCheckout.css"
import React from 'react'

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder, cart, totalPrice }) => {
    return (
        <div className="checkout-container">
            <div className="checkout-wrapper">
                <div className="checkout-header">
                    <h2 className="checkout-title">Finalizar Compra</h2>
                    <p className="checkout-subtitle">Completa tus datos para procesar la orden</p>
                </div>

                <div className="order-summary">
                    <h3 className="summary-title">Resumen de tu pedido</h3>
                    <div className="summary-content">
                        <div className="summary-item">
                            <span className="summary-label">Productos:</span>
                            <span className="summary-value">{cart?.length || 0} item(s)</span>
                        </div>
                        <div className="summary-item total">
                            <span className="summary-label">Total:</span>
                            <span className="summary-value">${totalPrice ? totalPrice() : '0'}</span>
                        </div>
                    </div>
                </div>

                <form className="checkout-form" onSubmit={sendOrder}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="fullname">
                            Nombre Completo
                        </label>
                        <input 
                            className="form-input"
                            type="text" 
                            id="fullname"
                            name="fullname" 
                            value={dataForm.fullname} 
                            onChange={handleChangeInput}
                            placeholder="Ingresa tu nombre completo"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                            Teléfono
                        </label>
                        <input 
                            className="form-input"
                            type="tel" 
                            id="phone"
                            name="phone" 
                            value={dataForm.phone} 
                            onChange={handleChangeInput}
                            placeholder="+54 9 11 1234 5678"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input 
                            className="form-input"
                            type="email" 
                            id="email"
                            name="email" 
                            value={dataForm.email} 
                            onChange={handleChangeInput}
                            placeholder="ejemplo@correo.com"
                            required
                        />
                    </div>

                    <button className="submit-btn" type="submit">
                        <span className="btn-icon">🛒</span>
                        Confirmar Orden
                    </button>
                </form>

                <div className="security-notice">
                    <div className="security-icon">🔒</div>
                    <p>Tus datos están protegidos con encriptación SSL</p>
                </div>
            </div>
        </div>
    )
}

export default FormCheckout;