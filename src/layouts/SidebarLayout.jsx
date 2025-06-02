import { Link, Outlet, useLocation } from 'react-router-dom'
import { FaHome, FaUserFriends, FaEnvelope, FaGift, FaBullhorn, FaChartBar } from 'react-icons/fa'

export default function SidebarLayout() {
  const location = useLocation()

  const navItems = [
    { to: '/', icon: <FaHome />, label: 'Home' },
    { to: '/clientes', icon: <FaUserFriends />, label: 'Clientes' },
    { to: '/plantillas', icon: <FaEnvelope />, label: 'Plantillas' },
    { to: '/promociones', icon: <FaGift />, label: 'Promos' },
    { to: '/campanas', icon: <FaBullhorn />, label: 'Campañas' },
    { to: '/referidos', icon: <FaChartBar />, label: 'Reportes' },
  ]

  return (
    <div className='flex flex-row min-h-screen bg-gray-50'>
      

      {/* Bottom Nav para móvil */}
      <nav className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow z-50'>
        <ul className='flex justify-around py-2'>
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex flex-col items-center text-xs ${
                  location.pathname === to ? 'text-teal-600 font-medium' : 'text-gray-500'
                }`}
              >
                <div className='text-xl'>{icon}</div>
                <span className='mt-1'>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar para escritorio */}
      <aside className='hidden md:flex md:flex-col w-64 bg-gray-800 text-white px-4 py-6 space-y-4 h-auto'>
        <h1 className='text-lg font-bold'>SaaS PYME</h1>
        {navItems.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 p-2 rounded hover:bg-gray-700 ${
              location.pathname === to ? 'bg-gray-700' : ''
            }`}
          >
            <span className='text-xl'>{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
        <Link to='/login' className='text-sm text-gray-300 mt-8 hover:underline'>
          Cerrar sesión
        </Link>
      </aside>
      <main className='flex-1 p-6'>
        <Outlet />
      </main>
    </div>
  )
}
