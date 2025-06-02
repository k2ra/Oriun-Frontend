import { useState } from 'react'
import TemplateForm from '../components/TemplateForm'

export default function Plantillas() {
  const [templates, setTemplates] = useState([])

  const handleNewTemplate = (content) => {
    const nueva = { id: templates.length + 1, content }
    setTemplates([nueva, ...templates])
  }

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Plantillas</h2>
      <TemplateForm onSubmit={handleNewTemplate} />
      <ul className='space-y-2'>
        {templates.map((tpl) => (
          <li key={tpl.id} className='bg-gray-50 p-3 rounded shadow'>
            {tpl.content}
          </li>
        ))}
      </ul>
    </div>
  )
}
