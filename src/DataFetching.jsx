import React, { useEffect, useState } from 'react'
import axios from 'axios';

function DataFetching() {
    const [loading,setLoading]=useState(true)
    const [post,setPost]=useState({})
    const [error,setError]=useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false);
            setError('');
            setPost(response.data);
        }).catch(error=>{
            setLoading(false)
            setError('Something went error');
            setPost({});
        })
    },[])
  return (
    <div>
      {loading?"Loading..": post.title}
      {error?error:null}
    </div>
  )
}

export default DataFetching
