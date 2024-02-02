import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState={
   loading:true,
   error:'',
   post:{}

}
const reducer=(state,action)=>{
    switch(action.type){
        case 'Fetch_success':
            return{
                loading:false,
                error:'',
                post:action.payload
            }
            case 'Fetch_error':
                return{
                    loading:false,
                    error:'Something error',
                    post:{}
                }
                default:
                    return state;
    }
}
function DataFetchingTwo() {
    const [state,dispatch]=useReducer(reducer,initialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'Fetch_success',payload:res.data})
        }).catch(dispatch({type:'fetch_error'}));
    },[])
  return (
    <div>
      {state.loading?"Loading..": state.post.title}
      {state.error?state.error:null}
    </div>
  )
}

export default DataFetchingTwo
