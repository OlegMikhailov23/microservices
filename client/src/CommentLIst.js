import React from 'react';

export const CommentList = ({ postComments }) => {
  const renderComments = postComments?.map((c) => {
    return <li key={c.id}>{c.content}</li>;
  });

  return <ul>{renderComments}</ul>;
};