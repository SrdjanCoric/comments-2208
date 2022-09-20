const AddCommentForm = () => {
  return (
    <form action="">
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label>Your Name</label>
        <input type="text" name="author" />
      </div>

      <div className="input-group">
        <label>Your Comment</label>
        <textarea name="body" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCommentForm;
