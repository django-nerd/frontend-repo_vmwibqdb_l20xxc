export default function Benefits() {
  const items = [
    {
      title: 'Minutes to launch',
      desc: 'Under 10 minutes from content to coach',
    },
    {
      title: 'Conversational mastery',
      desc: 'Realistic scenarios with instant feedback',
    },
    {
      title: 'Measurable readiness',
      desc: 'Dashboards tied to business KPIs',
    },
    {
      title: 'Works where you work',
      desc: 'LMS/LXP, Slack/Teams, SCORM/xAPI, SSO',
    },
  ]

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Why teams choose Katie</h2>
          <p className="mt-2 text-gray-600">Built for results, not complexity</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl ring-1 ring-gray-200 p-6 bg-white">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
