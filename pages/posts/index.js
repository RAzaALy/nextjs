import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
        <Link href={`/posts/${post.id}`} passHref>
          <h1>
            {post.id} {post.title}
          </h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
