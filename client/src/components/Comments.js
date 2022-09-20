import CommentThread from "./CommentThread";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <h2>Comments (2)</h2>
      {comments.map((comment) => {
        return <CommentThread key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
