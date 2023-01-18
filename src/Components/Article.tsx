import React from 'react'
import { Post } from '../interfaces';

interface IArticleProps {
  article: Post
}

const Article = ( {article}: IArticleProps ) => {
  return ( 
    <article className='article'>
      <h4>{article.title}</h4>
      <div>
        {article.body}
      </div>
      {/* <div>
        {article.tags.map(e) ={'>'} (
          <div className='tagNames'>
            {e}
          </div>
        )}
      </div> */}
    </article>
  )
}

export default Article