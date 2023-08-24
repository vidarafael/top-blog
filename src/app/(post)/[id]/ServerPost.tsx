import { PostContainer } from "@/components/PostContainer";

const ONE_DAY_IN_SECONDS = 60 * 60 * 24 // 24 hours

export async function ServerPost({ id }: { id: string }) {
  const data = await fetch(`http://127.0.0.1:3333/posts/${id}`, { next: { revalidate: ONE_DAY_IN_SECONDS } })
  const { post } = await data.json()

  if (!post) {
    return <p>Error</p>
  }

  return (
    <PostContainer 
      id={post.id}
      category={post.category}
      title={post.title}
      body={post.body}
      created_at={post.created_at} 
    />
  )
}