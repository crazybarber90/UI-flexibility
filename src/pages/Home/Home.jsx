import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <main className="px-6 md:px-16 py-20">
      {/* SECTION 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{
              color: 'var(--primary)',
              fontFamily: 'Popins, sans-serif',
            }}
          >
            CSS Ninja, UI master!
          </h1>
          <p className="mt-4 text-sub">
            Creative digital agency focused on UI + product growth
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">
            <Link to={'/contact'}>
              <button className="px-6 py-3 rounded-md bg-[var(--primary)] text-black font-semibold">
                Get started
              </button>
            </Link>
            <Link to={'/services'}>
              <button className="px-6 py-3 rounded-md border border-[var(--sub)]">
                See services
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE OF HOME PAGE (Hero section) */}
        <Hero />
      </section>

      {/* SECTION 2 Bottom cards */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Featured services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* card 1 */}
          <div className="p-6 bg-[var(--card)] rounded-2xl">
            <h3 className="text-[var(--primary)] font-bold">Design System 1</h3>
            <p className="mt-2 text-sub">
              “Implemented modern, responsive layouts using Tailwind CSS.
              Leveraged utility-first classes for rapid styling, responsive
              breakpoints, and interactive hover effects to create a polished,
              professional look across all devices.”
            </p>
          </div>

          {/* card 2 */}
          <div className="p-6 bg-[var(--card)] rounded-2xl">
            <h3 className="text-[var(--primary)] font-bold">Design System 2</h3>
            <p className="mt-2 text-sub">
              “Built reusable and dynamic React components with Styled
              Components. Used props and state to control styling, including
              interactive hover effects, conditional rendering, and responsive
              design, making the UI modular and maintainable.”
            </p>
          </div>

          {/* card 3 */}
          <div className="p-6 bg-[var(--card)] rounded-2xl">
            <h3 className="text-[var(--primary)] font-bold">Design System 3</h3>
            <p className="mt-2 text-sub">
              “Created traditional CSS solutions for global styles, typography,
              and layout. Implemented custom variables, gradients, flexbox
              layouts, and media queries to ensure a clean, responsive interface
              without relying on libraries.”
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
