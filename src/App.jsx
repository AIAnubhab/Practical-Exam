import './App.css'
import Counter from './components/Counter'
import ContextDemo from './components/ContextDemo'

function App() {
  return (
    <div className="app">
      <h1>Set 2</h1>

      <section className="section">
        <h2>Counter Application</h2>
        <Counter />
      </section>

      <section className="section">
        <h2>Context API Implementation</h2>
        <ContextDemo />
      </section>
    </div>
  )
}

export default App
