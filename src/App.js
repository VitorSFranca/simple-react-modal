import React, {useState} from 'react';
import Modal from './Components/Modal';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setModalOpen(!modalOpen)}>Change Status</button>
        <div style={{width: 60, height: 700, background: 'blue'}} />
        <Modal open={modalOpen} closeModal={setModalOpen}>
          <h1>Modal content</h1>
          <h2>More modal content</h2>
        </Modal>
      </header>
    </div>
  );
}

export default App;
