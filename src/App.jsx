import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import Home from "../src/Components/Section/Home/Home"
// import './App.scss'

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#161627',
              color: '#f5f5f7',
              border: '1px solid #6e45e2'
            }
          }}
        />
      </div>
    </HelmetProvider>
  )
}

export default App