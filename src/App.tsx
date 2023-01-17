import React from 'react';
import { useState } from 'react';
import './App.css';
import List from './Components/List';
import './mock-db';
// import { db } from './mock-db';

const tags = [
  'History',
  'Mystery',
  'Classic',
  'Magical',
  'Fiction'
]

const App: React.FC = () => {
  
  const [selected, setSelected] = useState<number>(0)

  const toggle = (i: number) => {
    if (selected === i) {
      setSelected(0);
    }
    setSelected(i);
  }  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Tiny Blog</h1>
        {/* <img src='https://www.freepik.com/premium-photo/abstract-painting-color-texture-modern-futuristic-pattern-loseup-painting-colorful-background_31473598.htm#&position=12&from_view=popular' alt='#'></img> */}
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


  {/* <div className='App">
        <Button
          isActive={activeUser}
          handleClick={onClickHandler} />
        {loading ?
          <h3>Φορτώνει...</h3> :
          <main>
            <div>
              <UserPicture user={user} />
            </div>
         
            <div className='app__name'>
              <UserName user={user} />
            </div>
            <UserAge user={user} />
            <UserAddress user={user} />

          </main>}
      </div> */}