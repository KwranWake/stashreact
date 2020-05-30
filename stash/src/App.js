import React from 'react';
//import './App.css';
import Header from './Header'
import Main from './Main'
import Aside from './Aside'
import Footer from './Footer'

function App() {
  return(
    <div className = "App">
      <Header />
      <main className = "Main-container">
        <Aside />
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default App;