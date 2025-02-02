import { useState } from 'react';
import { CohereClient } from 'cohere-ai';
import 'web-speech-api'; // Import the web-speech-api polyfill

const cohere = new CohereClient({
    token: 'YOUR_API_KEY',
});


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
