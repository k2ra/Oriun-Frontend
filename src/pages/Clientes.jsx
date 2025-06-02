import ClientCard from '../components/ClientCard'

export default function Clientes() {
  const clientes = [
    { id: 1, name: 'Panadería Delicias', phone: '+50761234567' },
    { id: 2, name: 'Farmacia La Salud', phone: '+50769874521' },
    { id: 3, name: 'Tienda El Ahorro', phone: '+50767778899' }
  ]

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Clientes</h2>
      <div className='space-y-3'>
        {clientes.map((cliente) => (
          <ClientCard key={cliente.id} name={cliente.name} phone={cliente.phone} />
        ))}
      </div>
    </div>
  )
}
