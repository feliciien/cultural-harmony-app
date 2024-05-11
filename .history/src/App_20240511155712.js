// Import the PronunciationPractice component
import PronunciationPractice from './components/PronunciationPractice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          harmony
        </a>
      </header>
      {/* Render the PronunciationPractice component */}
      <PronunciationPractice />
    </div>
  );
}

export default App;