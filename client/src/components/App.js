import React, { useState, useEffect } from "react";
import AddCommentForm from "./AddCommentForm";
import Comments from "./Comments";
import data from "../mockData/comments";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data);
  }, []);

  return (
    <div>
      <Comments comments={comments} />
      <AddCommentForm />
    </div>
  );
};

export default App;
