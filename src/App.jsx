import Nav from './components/Nav'
import Hero from './components/Hero'
import Section from './components/Section'
import ItemColumn from './components/ItemColumn'
import python from './assets/images/python.png'
import javascript from './assets/images/javascript.jpg'
import html from './assets/images/html.png'
import css from './assets/images/css.png'
import sql from './assets/images/sql.png'
import django from './assets/images/django.png'
import reactImg from './assets/images/react.png'

function App() {
  return (
    <>
      <Nav />
      <div className="max-w-xl mx-auto p-5 overflow-hidden">
        <main className="pt-20">
          <Hero />
          <Section title="Skills">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-y-3 my-5">
              <ItemColumn img={python} title="Python" desc="1 year" />
              <ItemColumn img={javascript} title="JavaScript" desc="1 year" />
              <ItemColumn img={html} title="HTML" desc="2 years" />
              <ItemColumn img={css} title="CSS" desc="2 years" />
              <ItemColumn img={sql} title="SQL" desc="1 year" />
            </div>
          </Section>
          <Section title="Frameworks">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-y-3 my-5">
              <ItemColumn img={django} title="Django" desc="1 year" />
              <ItemColumn img={reactImg} title="React" desc="1 year" />
            </div>
          </Section>
        </main>
        <footer>
          <p className="text-slate-800 dark:text-zinc-500 text-center">
            &copy; Axell Solis. All rights reserved
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
