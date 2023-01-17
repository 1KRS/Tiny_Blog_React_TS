import { useState, useEffect } from 'react';
// import { db } from '../mock-db';
// import Article from './Article';
import axios from 'axios';
import { Data } from '../interfaces';

interface ITag {
  tag: string;
}

const List = ( {tag}: ITag ) => {

  const [data, setData] = useState<Data>({
    posts: [],
    total: 0,
    skip: 0,
    limit: 0
  })

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
    .then(res => {
      console.log('res', res);
      setData({
        posts: res.data.posts,
        total: res.data.total,
        skip: res.data.skip,
        limit: res.data.limit
      })
    })
    .catch(() => {console.log('Error')})
  }, [])

  const articles = data.posts.filter(a => a.tags.includes(tag.toLowerCase()))
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