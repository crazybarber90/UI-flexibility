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
              <button className="px-6 py-3 rounded-md bg-primary text-black font-semibold">
                Get started
              </button>
            </Link>
            <Link to={'/services'}>
              <button
                className="relative group px-6 py-3 rounded-md border border-sub text-sub 
                    overflow-hidden transition-colors duration-300 hover:text-accent"
              >
                {/* Animateed border */}
                <span
                  className="absolute inset-0 rounded-md border-2 border-primary opacity-0 
                    group-hover:opacity-100 animate-none group-hover:animate-[border-draw_0.5s_linear_forwards]"
                ></span>

                <span className="relative z-10">See services</span>
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE OF HOME PAGE (Slider) */}
        <Hero />
      </section>

      {/* SECTION 2 Bottom cards */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Hover Cards, Enjoy!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* card 1 */}
          <div
            className="p-6 bg-card/60 backdrop-blur-md text-center rounded-2xl border border-white/10 
                  transition-all duration-500 hover:shadow-[0_0_10px_rgba(0,224,198,0.3)] hover:-translate-y-2 hover:scale-105"
          >
            <h3 className="text-primary font-extralight">Design Animation 1</h3>
            <p className="mt-2 text-sub">
              Built reusable and dynamic React components with Styled
              Components. Used props and state to control styling, including
              interactive hover effects, conditional rendering, and responsive
              design, making the UI modular and maintainable.
            </p>
          </div>

          {/* card 2 */}
          <div
            className="group relative p-6 text-center bg-card rounded-2xl shadow-md transition-all duration-500
                  hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:animate-[tilt-float_1.2s_ease-in-out]"
          >
            <h3 className="text-primary font-extralight">Design Animation 2</h3>
            <p className="mt-2 text-sub">
              Implemented modern, responsive layouts using Tailwind CSS.
              Leveraged utility-first classes for rapid styling, responsive
              breakpoints, and interactive hover effects to create a polished,
              professional look across all devices.
            </p>
          </div>

          {/* card 3 */}

          <div
            className="group relative p-6 text-center bg-card rounded-2xl border border-sub transition-all duration-500
                  hover:animate-[tilt-slide_1.3s_ease-in-out] hover:border-accent"
          >
            <h3 className="text-primary font-extralight">Design Animation 3</h3>
            <p className="mt-2 text-sub">
              Created traditional CSS solutions for global styles, typography,
              and layout. Implemented custom variables, gradients, flexbox
              layouts, and media queries to ensure a clean, responsive interface
              without relying on libraries.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
