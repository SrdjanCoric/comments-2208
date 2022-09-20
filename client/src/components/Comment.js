import moment from "moment";

const Comment = ({ author, body, postedAt }) => {
  return (
    <div className="comment">
      <hr />
      <div className="image">
        <img src="https://i.postimg.cc/Y0RcrdHp/no-user-image.gif" alt="" />
      </div>
      <div className="header">
        <h3 className="author">{author}</h3>
        <span>{moment(postedAt).fromNow()}</span>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
