import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CommentCreate from "./CommentCreate";
import { CommentList } from './CommentLIst';

let didInit = false;

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("//localhost:4000/posts");
    setPosts(res.data);
  }

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      fetchPosts();
    }
  }, []);

  const renderPosts = Object.values(posts).map(post => {
    return (
      <div key={post.id} className="card" style={{width: '30%', marginBottom: '20px'}}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  })

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts}
    </div>
  );
};

export default PostList;