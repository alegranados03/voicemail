import React from 'react';
import VoiceMailList from './components/VoiceMailList';
import Header from  './components/layouts/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <VoiceMailList></VoiceMailList>
    </div>
  );
}

export default App;
