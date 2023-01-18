export interface Post {
  id: number,
  body: string,
  tags: string[],
  reactions: number,
  title: string
  userId: number,
}

export interface Data {
  posts: Post[],
  total: number,
  skip: number,
  limit: number
}