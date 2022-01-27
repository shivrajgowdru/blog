import React from 'react';
import { useParams , useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import './Blogdetails.css'
const Blogdetails =() =>{
  const {id} = useParams();
  const { data:blog,error,ispending } = useFetch('http://localhost:8000/blogs/' + id);
  const history =useHistory()

const handleDelete = () => {
  fetch('http://localhost:8000/blogs/' + id , {
   method:"DELETE"

  }).then(
    history.push('/')
  )
}

  return (
    <div className='blog-details'>
    { ispending && <div>Loading...</div>}
    { error && <div>{error}</div>}
    { blog && (
     <article> 
       <h2>{blog.title} </h2>
       <p>Written by {blog.author}</p>
       <div>{blog.body}</div> 
       <button onClick={handleDelete}>delete</button>
       </article> 
    )}
  </div>
  )}
  export default Blogdetails;
