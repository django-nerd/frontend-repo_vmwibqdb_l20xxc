export default function UseCases() {
  const cases = [
    { title: 'Onboarding', desc: 'Cut ramp time by up to 50%' },
    { title: 'Sales Enablement', desc: 'Consistent messaging and objection handling' },
    { title: 'Compliance & Safety', desc: '100% completion with engaging scenarios' },
    { title: 'Knowledge Capture', desc: 'Turn expert knowledge into lasting assets' },
  ]

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">High-impact use cases</h2>
          <p className="mt-2 text-gray-600">Real results across industries</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl ring-1 ring-gray-200 p-6 bg-white">
              <h3 className="font-semibold text-gray-900">{c.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
