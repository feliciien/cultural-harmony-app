const [userPronunciation, setUserPronunciation] = useState(''); // You can change the initial value if needed

// Function to record user's pronunciation
const recordPronunciation = () => {
    const recognition = new window.SpeechRecognition(); // Note: Use 'window' to access the SpeechRecognition object
    recognition.lang = 'en-US'; // Set the language

    recognition.start();

    recognition.onresult = (event) => {
        const userInput = event.results[0][0].transcript;
        setUserPronunciation(userInput);

        // Compare the user's pronunciation with the correct pronunciation
        comparePronunciations(userInput, correctPronunciation);
    };

    recognition.onerror = (event) => {
        console.log('Speech recognition error:', event);
    };
};