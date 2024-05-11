// Import the PronunciationPractice component
import PronunciationPractice from './components/PronunciationPractice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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