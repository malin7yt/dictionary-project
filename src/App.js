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
<small>
  Coded by 
  <a href="https://malinjensen.com/" 
  target="_blank" 
  className="MalinLink" 
  rel="noreferrer">Malin Jensen</a>, Open sorce code on <a href="https://github.com/malin7yt/dictionary-project" target="_blank" className="GitHubLink" rel="noreferrer">GitHub</a></small>
      </footer>
      </div>
    </div>
  );
}

export default App;
