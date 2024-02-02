import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [id,setId] =useState(1);
  const [idButton,setIdButton]=useState(1);
 const handleChange =()=>{
  setIdButton(id);
 }

  useEffect(() => {
    // This code will run when the component mounts
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [idButton]); // An empty dependency array indicates the effect should run only on mount

  return (
    <div>
      <h1>Post List</h1>
     <input type="text" value={id} onChange={e=>setId(e.target.value)} />
     <button type='button' onClick={handleChange}>Fetch Posts</button>
     <div>{posts.title}</div>
    </div>
  );
}

export default PostList;
