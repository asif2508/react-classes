import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  console.log("data", data);
  return (
    <div>
      {data?.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
