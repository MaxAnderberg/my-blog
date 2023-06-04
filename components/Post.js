import Link from 'next/link'

const Post = ({post}) => {
  return (
    <div className='card'>
        <img src={post.frontmatter.cover_image} alt=''/>

        <div className='post-date'> Posted on {post.frontmatter.date}</div>

        <h3 className=''>{post.frontmatter.title}</h3>
    
        <p>{post.frontmatter.excerpt}</p>

    <Link href={`/blog/${post.slug}`}>
        <button href='#' className='btn'>Read More</button>
    </Link>
    </div>
  )
}

export default Post
