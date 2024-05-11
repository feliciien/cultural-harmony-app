import { useState } from 'react';
import { CohereClient } from 'cohere-ai';
import 'web-speech-api'; // Import the web-speech-api polyfill

const cohere = new CohereClient({
    token: 'YOUR_API_KEY',
});

const LanguageLearningPlatform = () => {
    // State variables
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

    // Function to compare pronunciations
    const comparePronunciations = async (userPronunciation, correctPronunciation) => {
        const response = await cohere.generate({
            prompt: `Is "" the correct pronunciation for ""?`,
            maxTokens: 10,
        });

        const isCorrect = response.choices[0].text.toLowerCase() === 'yes';

        // Update the score based on the comparison result
        if (isCorrect) {
            setScore(score + 1);
        } else {
            setScore(score - 1);
        }
    };

    //... (rest of the component code)
};

export default LanguageLearningPlatform;