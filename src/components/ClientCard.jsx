export default function ClientCard({ name, phone }) {
  return (
    <div className='bg-white shadow p-4 rounded-md mb-4'>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <p className='text-sm text-gray-600'>📞 {phone}</p>
    </div>
  )
}
