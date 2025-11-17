export default function FAQ() {
  const faqs = [
    {
      q: "What's the difference between ChatGPT and Katie?",
      a: 'Katie turns your materials into role-play coaches with feedback and dashboards, purpose-built for enablement and training.'
    },
    { q: 'How quickly can we get started?', a: 'Most teams launch their first coach in under 10 minutes.' },
    { q: 'Can Katie integrate with our existing LMS or platforms?', a: 'Yes—LMS/LXP, Slack/Teams, SCORM/xAPI, SSO are supported.' },
    { q: 'What kind of content does Katie work with?', a: 'Videos, slides, PDFs, images, audio and more.' },
    { q: 'How do you measure the effectiveness of training?', a: 'Manager dashboards tied to business KPIs and readiness scores.' },
    { q: 'What support do we receive?', a: 'Guided onboarding and ongoing success partnership.' },
  ]

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-gray-200 rounded-xl ring-1 ring-gray-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 open:bg-gray-50">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
