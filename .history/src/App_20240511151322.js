// Import the PronunciationPractice component
import PronunciationPractice from './components/PronunciationPractice.';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Render the PronunciationPractice component */}
      <PronunciationPractice />
    </div>
  );
}

export default App;