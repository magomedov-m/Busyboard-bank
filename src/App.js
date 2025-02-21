import { Header } from "./components/Header/Header";
import { Section } from "./components/section/Section";
import './api/route'
import '../src/App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
        <main className="main-content">
          <h1 className="main-title">Банки</h1>
          <Section />
        </main>
    </div>
  );
}

export default App;
