import { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';
import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState('');

  // Example API integration: fetch a random quote
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setQuote(data.content))
      .catch(err => console.error('API Error:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">React + Tailwind Assignment</h1>
        
        <section className="mb-6">
          <p className="text-lg">Here's a random quote from the API:</p>
          <blockquote className="italic text-blue-500 mt-2">{quote}</blockquote>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Counter Example</h2>
          <div className="flex items-center gap-4">
            <Button onClick={() => setCount(count - 1)} text="-" />
            <span className="text-xl font-bold">{count}</span>
            <Button onClick={() => setCount(count + 1)} text="+" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Task Manager</h2>
          <TaskManager />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
