import logo from "./logo-2.png"
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
<img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center App-footer">
<small>Coded by Malin Jensen</small>
      </footer>
      </div>
    </div>
  );
}

export default App;
