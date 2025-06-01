import React from 'react';

const TextToSpeech = ({ messages }) => {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="tts-container">
      <button onClick={() => speak(messages[messages.length - 1]?.message || '')}>
        🔊 Read Last
      </button>
    </div>
  );
};

export default TextToSpeech;
