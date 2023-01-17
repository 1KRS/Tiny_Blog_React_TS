import React from 'react'
import { db } from '../mock-db';
import Article from './Article';

interface ITag {
  tag: string;
}

const List = ( {tag}: ITag ) => {
  const data = db.posts;
  const articles = data.filter(a => a.tags.includes(tag.toLowerCase()))
  console.log('tag:', tag);
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