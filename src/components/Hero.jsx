import { motion } from 'framer-motion'

export default function Hero({ onDemoClick, onContactClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
              Clean SaaS Template
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Turn Knowledge into Coaches
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-7">
              Katie converts your existing materials into conversational coaches so teams learn faster and perform better—in minutes, not months.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onContactClick} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-gray-800 transition">
                Contact Us
              </button>
              <button onClick={onDemoClick} className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 text-sm font-semibold ring-1 ring-gray-200 hover:bg-gray-50 transition">
                Watch 1-min Demo
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 ring-1 ring-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-sm text-gray-500">How Katie Works</p>
                <h3 className="text-xl font-semibold mt-1">From content to coach in 3 simple steps</h3>
                <ol className="mt-4 grid grid-cols-3 gap-4 text-left text-sm">
                  <li className="bg-white rounded-lg p-4 ring-1 ring-gray-200">
                    <span className="text-gray-400 text-xs">01</span>
                    <p className="mt-1 font-medium">Upload your content</p>
                    <p className="text-gray-500 mt-1">Drag & drop any file: video, slides, PDFs, images, or audio.</p>
                  </li>
                  <li className="bg-white rounded-lg p-4 ring-1 ring-gray-200">
                    <span className="text-gray-400 text-xs">02</span>
                    <p className="mt-1 font-medium">Define outcomes</p>
                    <p className="text-gray-500 mt-1">State the outcome (e.g., "Ramp new reps" or "Pass Policy 4.2").</p>
                  </li>
                  <li className="bg-white rounded-lg p-4 ring-1 ring-gray-200">
                    <span className="text-gray-400 text-xs">03</span>
                    <p className="mt-1 font-medium">Coach in conversation</p>
                    <p className="text-gray-500 mt-1">Role-play interface with instant feedback and dashboards.</p>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
