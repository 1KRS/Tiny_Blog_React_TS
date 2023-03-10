import React from 'react';
import { useState } from 'react';
import List from './Components/List';
import blog from './blog.jpg';
import './App.css';
import './mock-db';

const tags = [
  'History',
  'Mystery',
  'Classic',
  'Magical',
  'Fiction'
]

const App: React.FC = () => {
  
  const [selected, setSelected] = useState<number | null>(null)

  const toggle = (i: number) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  }  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Tiny Blog</h1>
        <img src={blog} className='blog-img' alt='blog-img' />
      </header>
      <main className='App-body'>
        <div className='wraper'>
          <div className='accordion'>
            {tags.map((tag, i) => (
              <section className='section' key={i}>
                <div className='section-header' onClick={() => toggle(i)}>
                  <h2>{tag}</h2>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'section-list show' : 'section-list'}>
                  <List tag={tag} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App ;