import { createContext, useContext, useEffect, useState } from 'react'
import { db, auth, provider } from '../firebase'

const ChatContext = createContext()

export const useChat = () => useContext(ChatContext)

const ChatProvider = ({children}) => {

    const dataUsuario = { uid: null, email: null, estado: null }
    const [usuario, setUsuario] = useState(dataUsuario)
    const [mensajes, setMensajes] = useState([])

    useEffect(() => {
        detectarUsuario()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const detectarUsuario = () => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setUsuario({ uid: user.uid, email: user.email, estado: true })
                cargarMensajes()
            } else {
                setUsuario({ uid: null, email: null, estado: false })
            }
        })
    }

    const ingresoUsuario = async () => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    }
    const cerrarUsuario = () => {
        auth.signOut()
    }

    const cargarMensajes = () => {
        db.collection('chat').orderBy('fecha')
            .onSnapshot(query => {
                const arrayMensajes = query.docs.map(item => item.data())
                setMensajes(arrayMensajes)
            })
    }

    const agregarMensaje = async (uid, texto) => {
        try {
            await db.collection('chat').add({
                fecha: Date.now(),
                texto: texto,
                uid: uid
            })
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <ChatContext.Provider value={{
            usuario, 
            mensajes,
            ingresoUsuario,
            cerrarUsuario, 
            agregarMensaje
        }}>
            {children}
        </ChatContext.Provider>
     )
}
 
export default ChatProvider;