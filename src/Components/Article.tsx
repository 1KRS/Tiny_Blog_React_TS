import { Post } from '../interfaces';

interface IArticleProps {
  article: Post
}


const Article = ( {article}: IArticleProps ) => {
  const tags = article.tags;
  console.log(tags);

  return ( 
    <article className='article'>
      <h4 className='article-title'>{article.title}</h4>
      <div className='article-body'>
        {article.body}
      </div>
      <div className='article-tags'>
       { `#${tags[0]} #${tags[1]} #${tags[2]}` }
      </div>
    </article>
  )
}

export default Article