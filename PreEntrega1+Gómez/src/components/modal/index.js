import React from "react";
import './styles.css'

const Modal = ({ children, isOpen, toggleModal}) => {
    return ( // <> es para separar los nodos y no afectar el DOM
        <>
            {isOpen && (   //con && preguntas solo si esta abierto
                <div className="modal-overlay">
                    <div className="modal-content">
                        {children}
                        <button className="modal-close" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;