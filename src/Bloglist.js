 import React from 'react'
 import './Bloglist.css'
 import {Link} from 'react-router-dom'
 function Bloglist(props) {
  const blogs = props.logs 
  const title = props.title
     return (
     <div>
     <h2>{title}</h2>
     {
         blogs.map((blog) => (
        <div className="blogs-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </Link>
        </div>
      )) 
     }
     </div>
      )};
 
 export default Bloglist
 