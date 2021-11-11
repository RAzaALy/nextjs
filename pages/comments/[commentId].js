import { comments } from "../../data/comments";
import { useRouter } from "next/dist/client/router";

const CommentDetails = ({ comment }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Comment Details Page</h1>
      <h2>
        {comment.id} {comment.text}
      </h2>
    </div>
  );
};

export default CommentDetails;

export async function getStaticPaths() {
  return {
    paths: [{ params: { commentId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;
  //don't  use api request because data is avialable
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  return {
    props: {
      comment,
    },
  };
}
