import Chat from './components/Chat'
import Navbar from './components/Navbar'
import { useChat } from './context/ChatProvider'

function App() {

  const { usuario } = useChat()

  return usuario !== null ? (
    <div>
      <Navbar />
      {
        usuario.estado ? <Chat /> : ( <div className="lead text-center mt-5">Debes Iniciar Sesion</div> )
      }
    </div>
  ) : (
    <div>Cargando...</div>
  )
}

export default App