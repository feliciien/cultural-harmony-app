import { useState } from 'react';
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
    token: "YOUR_API_KEY",
});

(async () => {
    const prediction = await cohere.generate({
        prompt: "hello",
        maxTokens: 10,
    });
    
    console.log("Received prediction", prediction);
})();
export default LanguageLearningPlatform;