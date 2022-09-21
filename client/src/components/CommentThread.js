import axios from "axios";
import Comment from "./Comment";

const CommentThread = ({ comment, comments, setComments }) => {
  const handleMoreReplies = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `/api/comment_replies?comment_id=${comment.id}`
    );
    const replies = response.data;
    setComments(
      comments.map((c) => {
        if (c.id === comment.id) {
          return { ...c, replies: c.replies.concat(replies) };
        }
        return c;
      })
    );
  };

  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        {comment.replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {comment.replies_count === comment.replies.length ? null : (
          <a href="#" className="show_more" onClick={handleMoreReplies}>
            Show More Replies (2)
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
