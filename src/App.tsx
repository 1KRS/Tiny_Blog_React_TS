import React from 'react';
import { useState } from 'react';
import './App.css';
import List from './Components/List';
import './mock-db';
import { db } from './mock-db';

// useEffect(() => {
//   fetch(
//     // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=b841456a214f46eeb5059ede37a35a59&includeNutrition=false`
//     // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dc639e7ebbd44c9dbd31fe4deb1ea437&includeNutrition=false`
//     // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dbc2e390cbfe4f92914fceb030362bdb&includeNutrition=false`
//     `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=b624a3e6a2fe4544affd85dd3fa41d78&includeNutrition=false`
//     // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=f348e2e93a6d43ddbbb1be8b4298baa7&includeNutrition=false`
//   )
//   .then(res => res.json())
//   .then(data => {
//     setImageUrl(data.image)
//   })
//   .catch(() => {console.log('Error')})
// }, [meal.id])
 
const data = db;
console.log(data);

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
    <body className='App'>

      <header className='App-header'>
        <h1>Tiny Blog</h1>
        {/* <img src='https://www.freepik.com/premium-photo/abstract-painting-color-texture-modern-futuristic-pattern-loseup-painting-colorful-background_31473598.htm#&position=12&from_view=popular' alt='#'></img> */}
      </header>
      <main className='App-body'>
        <div className='wraper'>
          <div className='accordion'>
            {tags.map((tag, i) => (
              <section className='section'>
                <div className='section-header' onClick={() => toggle(i)}>
                  <h2>{tag}</h2>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'section-list show' : 'section-list'}>
                  <List />
                  {/* <h5>Λαλα</h5> */}
                </div>
              </section>))} 
          </div>
        </div>
      </main>
    </body>
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