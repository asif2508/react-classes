import React from "react";

const Post = (props) => {
  const { post } = props;
  return (
    <div key={post.id}>
      <p>{post.userId}</p>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;
