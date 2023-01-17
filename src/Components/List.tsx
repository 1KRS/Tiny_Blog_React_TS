import React from 'react'
import { db } from '../mock-db';
import Article from './Article';

function List() {
  const data = db.posts;
  const articles = data.filter(a => a.tags.includes('mystery'))
  console.log('Articles:', articles);

  return (
    <div className='accordion'>
            {articles.map((article, i) => (
              <article className='article'>
                <h4>{article.title}</h4>
                  <div>
                    {article.body}
                  </div>
                {/* <div className='section-list'>
                  <Article />
                </div> */}
              </article>))} 
          </div>
  )
}

export default List