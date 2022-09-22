import React, { useState, useEffect } from "react";
import axios from "axios";
import AddCommentForm from "./AddCommentForm";
import Comments from "./Comments";
import Todos from "./Todos";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get("/api/comments");
      setComments(response.data);
    };
    fetchComments();
  }, []);

  const handleSubmit = async (newComment, callback) => {
    try {
      const response = await axios.post("/api/comments", { ...newComment });
      setComments(comments.concat(response.data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Todos />
      <Comments comments={comments} setComments={setComments} />
      <AddCommentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
