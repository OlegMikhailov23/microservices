import React, { useState } from 'react';
import axios from 'axios';
import { home } from "./consts/urls";

const PostCreate = () => {
  const [ title, setTitle ] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`//${home}/posts/create`, {
      title
    });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <fieldset className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </fieldset>
        <button
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;