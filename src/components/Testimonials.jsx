export default function Testimonials() {
  const quotes = [
    {
      body: 'Things move so fast in our industry that our sales team used to struggle to keep up. Katie got everyone perfectly aligned on how to sell our product, and now our reps are more confident and consistent than ever.',
      role: 'Sales Enablement Manager',
      company: 'Software Company',
    },
    {
      body: 'We were amazed at how fast we built a high-quality coaching agent with Katie. It completely broke through the bottleneck in our learning and development department, and now we can roll out new training almost instantly.',
      role: 'Learning & Development Manager',
      company: 'Global Retailer',
    },
    {
      body: 'Onboarding new employees was always a headache for us because it was hard to transfer knowledge and ensure they had support. Katie changed that by giving our new hires an instant coach and a go-to resource for all their questions, making it so much easier for them to get up to speed.',
      role: 'HR Manager',
      company: 'Cybersecurity Company',
    },
  ]

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">What our customers say</h2>
          <p className="mt-2 text-gray-600">Real results from real teams</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-xl ring-1 ring-gray-200 p-6 bg-white">
              <p className="text-gray-700">“{q.body}”</p>
              <div className="mt-4 text-sm text-gray-500">{q.role} • {q.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
