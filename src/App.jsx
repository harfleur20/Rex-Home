import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Acceuil from './components/Acceuil/Acceuil';
function App() {

  return (
  <div className="app">
    <section className="conteneur-acceuil">
      <div className="acceuil">
        <Navbar/>
        <Acceuil/>
      </div>
    </section>
  </div>
  )
}

export default App
