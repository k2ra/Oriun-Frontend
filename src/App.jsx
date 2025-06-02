import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Plantillas from './pages/Plantillas'
import Promociones from './pages/Promociones'
import Campanas from './pages/Campanas'
import Referidos from './pages/Referidos'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<SidebarLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='clientes' element={<Clientes />} />
          <Route path='plantillas' element={<Plantillas />} />
          <Route path='promociones' element={<Promociones />} />
          <Route path='campanas' element={<Campanas />} />
          <Route path='referidos' element={<Referidos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
