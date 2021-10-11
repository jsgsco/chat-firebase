import { useState } from "react";
import { useChat } from "../context/ChatProvider";

const Formulario = () => {

    const { usuario, agregarMensaje } = useChat()
    const [mensaje, setMensaje] = useState('')

    const agregar = e => {
        e.preventDefault()

        if(!mensaje.trim()) {
            console.log('Viene vacio')
            return
        }

        agregarMensaje(usuario.uid, mensaje)
        setMensaje('')
    }

    return ( 
        <form 
            className="fixed-bottom input-group p-3 bg-dark"
            onSubmit={ agregar }
        >
            <input 
                type="text" 
                className="form-control"
                onChange={ (e) => setMensaje(e.target.value) }
                value={mensaje}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-primary"
                    type="submit"
                >Enviar</button>
            </div>
        </form>
     );
}
 
export default Formulario;