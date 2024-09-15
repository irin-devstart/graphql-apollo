import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_POSTS } from "../GraphQL/Queries";
function GetPosts() {
  const { error, loading, data } = useQuery(LOAD_POSTS);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data.getAllPosts);
  }, [data]);
  return (
    <div>
      {posts.map((val) => (
        <h1>{val.title}</h1>
      ))}
    </div>
  );
}

export default GetPosts;
