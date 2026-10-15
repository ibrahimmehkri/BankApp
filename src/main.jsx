import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  function openHomePage() {
    setShowHomePage(true);
  }

  if (showHomePage) {
    return <HomePage />;
  }

  return <LoginPage onLogin={openHomePage} />;
}

createRoot(document.getElementById('root')).render(<App />)
