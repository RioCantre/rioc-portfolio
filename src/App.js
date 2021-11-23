import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className='App'>
        <header className='App-header'>
            <h1>Rio Cantre</h1>
            <p>
            My coding journey leads me to discover my passion for creating.
            Learning the fundamental use of programming motivates me to build
            meaningful projects.
            </p>
            <p>
            As an aspiring Front-end Developer, I am broadening my knowledge with
            the current technologies, especially React. Venturing and open to
            opportunities where I could make use of my skills as a developer.
            </p>
            <Button />
            <Footer />
        </header>
        </div>
    );
}

export default App;
