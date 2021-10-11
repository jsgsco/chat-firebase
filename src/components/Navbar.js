import React from 'react'
import { useChat } from '../context/ChatProvider'

const Navbar = () => {

    const { usuario, ingresoUsuario, cerrarUsuario } = useChat()

    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">Chat</span>

            <div>
                {
                    usuario.estado ? (
                        <button 
                            className="btn btn-outline-danger my-2"
                            onClick={ cerrarUsuario }
                        >Cerrar Sesion</button>
                    ) : (
                        <button 
                            className="btn btn-outline-success my-2"
                            onClick={ ingresoUsuario }
                        >Acceder</button>
                    )
                }                
            </div>
        </nav>
    )
}

export default Navbar
