import { useRouter } from "next/dist/client/router";

const PostDetails = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    //if fallback is false then nextjs show 404 page if the path is not return by getStaticPaths
    // fallback: false,
    //if fallback is true then in background it generate html and json for that page
    fallback: true,

    //not falsh of loading just a delay and populate full page from server
    // fallback: 'blocking'
  };
}

export async function getStaticProps(context) {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(user, password);
  
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
