import { useState } from 'react'

export default function TemplateForm({ onSubmit }) {
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!content) return
    onSubmit(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow mb-4'>
      <h3 className='text-lg font-semibold mb-2'>Crear Plantilla</h3>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='w-full border rounded p-2 mb-2'
        placeholder='Escribe tu mensaje con {{variables}}...'
        rows='4'
      />
      <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
        Guardar Plantilla
      </button>
    </form>
  )
}
