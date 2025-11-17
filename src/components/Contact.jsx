import { useState } from 'react'

const initial = { first_name: '', last_name: '', email: '', company: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'loading', msg: '' })
    try {
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      const data = await res.json()
      setStatus({ state: 'success', msg: data.message })
      setForm(initial)
    } catch (err) {
      setStatus({ state: 'error', msg: err.message || 'Something went wrong' })
    }
  }

  return (
    <section id="contact" className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Get in touch</h2>
          <p className="mt-2 text-gray-600">Ready to transform your team's training? Let's talk.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-5 bg-white p-6 rounded-xl ring-1 ring-gray-200">
          <div>
            <label className="text-sm text-gray-700">First Name *</label>
            <input name="first_name" value={form.first_name} onChange={onChange} required placeholder="Enter your first name" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-900" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Last Name *</label>
            <input name="last_name" value={form.last_name} onChange={onChange} required placeholder="Enter your last name" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-900" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Email *</label>
            <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="Enter your email" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-900" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Company</label>
            <input name="company" value={form.company} onChange={onChange} placeholder="Enter your company" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-900" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Message *</label>
            <textarea name="message" value={form.message} onChange={onChange} required placeholder="Tell us about your training challenges and goals..." rows={5} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-900" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" disabled={status.state==='loading'} className="rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-gray-800 disabled:opacity-60">
              {status.state==='loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status.state==='success' && <p className="text-green-600 text-sm">{status.msg}</p>}
            {status.state==='error' && <p className="text-red-600 text-sm">{status.msg}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
