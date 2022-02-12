import {getFullYear, getFooterCopy} from './utils';
import logo from './Holberton_Logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="holberton logo" />
        <h1>School Dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input id="email" type="email"/>
        <label for="password">Password</label>
        <input id="password" type="password"/>
        <button id="ok_button">OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
