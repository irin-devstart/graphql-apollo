import React, { useState } from "react";
import { CREATE_POST_MOTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //useMutation Hook
  //createPost adalah Fungsi

  const [createPost, { error }] = useMutation(CREATE_POST_MOTATION);
  const addPost = () => {
    createPost({
      variables: {
        title: title,
        body: body,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      >
        Input
      </textarea>
      <button onClick={addPost}>Create Post</button>
    </div>
  );
}

export default Form;
