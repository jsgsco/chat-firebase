import { useEffect, useRef } from "react"
import { useChat } from "../context/ChatProvider"
import Formulario from "./Formulario"

const Chat = () => {

    const { mensajes, usuario } = useChat()
    const refZonaChat = useRef(null)

    useEffect(() => {
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    }, [mensajes])

    return ( 
        <div 
            className="mt-3 px-2"
            style={{height: '75vh', overflowY: 'scroll'}}
            ref={refZonaChat}
        >

            {
                mensajes.map((item, i) => (
                    usuario.uid === item.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={i}>
                            <span className="badge badge-pill badge-primary">
                                {item.texto}
                            </span>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start mb-2" key={i}>
                            <span className="badge badge-pill badge-secondary">
                                {item.texto}
                            </span>
                        </div>
                    )
                ))
            }
            <Formulario />
        </div>
     );
}
 
export default Chat;