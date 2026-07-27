import './App.css'
import { LoadStatus, calc, page1, page2, person } from './homework'

function App() {
  const result = calc(10, 15)
  const status = LoadStatus.READY

  return (
    <main className="page">
      <h1>HW 41 TypeScript</h1>

      <section className="card">
        <h2>Tuple</h2>
        <p>
          {person[0]}, {person[1]}
        </p>
      </section>

      <section className="card">
        <h2>Enum</h2>
        <p>{status}</p>
      </section>

      <section className="card">
        <h2>Function</h2>
        <p>calc(10, 15) = {result}</p>
      </section>

      <section className="card">
        <h2>Custom type</h2>
        <p>
          {page1.title} / {page2.title}
        </p>
      </section>
    </main>
  )
}

export default App
