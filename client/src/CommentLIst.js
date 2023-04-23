import axios from 'axios';
import React, {useEffect, useState} from 'react';

export const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `//localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderComments = comments.map((c) => {
    return <li key={c.id}>{c.content}</li>;
  });

  return <ul>{renderComments}</ul>;
};