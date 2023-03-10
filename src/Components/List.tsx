import { useState, useEffect } from 'react';
import Article from './Article';
import axios from 'axios';
import { Data } from '../interfaces';

interface ITagProps {
  tag: string;
}

const List = ( {tag}: ITagProps ) => {

  const [data, setData] = useState<Data>({
    posts: [],
    total: 0,
    skip: 0,
    limit: 0
  })

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
    .then(res => {
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
  
  return (
    <div className='accordion'>
      {articles.map((article, i) => (
        <Article article={article} key={i}/>
      ))}
    </div>
  )
}

export default List