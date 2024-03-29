import React, { useState } from 'react';
import axios from 'axios';
import { home } from './consts/urls';

const CommentCreate = ({ postId }) => {
  const [comment, setComment] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://${home}/posts/${postId}/comments`, {
      content: comment,
    });

      setComment('');
    };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <fieldset className="form-group">
          <label>New Comment</label>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            className="form-control"
          />
        </fieldset>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;