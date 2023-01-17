import React from 'react'

interface articleProps {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

const Article = ( ) => {
  return (
    <div>Article</div>
  )
}

export default Article

//{ article }: articleProps