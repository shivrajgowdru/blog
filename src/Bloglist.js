 import React from 'react'
 
 function Bloglist(props) {
  const blogs = props.logs 
  const title = props.title
     return (
     <div>
     <h2 key={5334}>{title}</h2>
     {
         blogs.map((blog) => (
        <div className="blogs-preview" key={blog.key}>
          <h2>{blog.title}</h2>
          <p>Written by { blog.author}</p>
        </div>
       
      )) 
     }
     </div>
      )};
 
 export default Bloglist
 