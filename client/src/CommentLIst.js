import React from 'react';

export const CommentList = ({ postComments }) => {
  const renderComments = postComments?.map((c) => {
    let content;
    if (c.status === "pending") {
      content = "Comment is awaiting for approve";
    }

    if (c.status === "rejected") {
      content = "Comment was rejected";
    }

    if (c.status === 'rejected') {
      content = 'Comment was rejected';
    }

    if (c.status === "approved") {
      content = c.content;
    }
    return <li key={c.id}>{content}</li>;
  });

  return <ul>{renderComments}</ul>;
};