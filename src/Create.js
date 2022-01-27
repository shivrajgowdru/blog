import './Create.css'
import {useState} from 'react'
import { useHistory} from 'react-router-dom'

const Create = () => {

  const [title,setTitle] = useState("")
const [body,setBody] =useState('')
const [author,setAuthor] = useState("")
 const history = useHistory()

const handleSubmit = (e) => {
  e.preventDefault()
  const blog = { title, body , author}


  
  fetch("http://localhost:8000/blogs",{
  method: 'post',
  headers: {"content-type":"application/json"},
  body: JSON.stringify(blog)
  }).then(
    console.log("blog added"),
    history.push('/')
  )
 
}


  return (
      <>
      <form className='form-control' onSubmit={handleSubmit}> 
      <h3>Add a New Blog</h3>
      <label>Blog title:</label>
         <input 
             type="text"
             required={true}
             value={title}
             onChange={(e) => setTitle(e.target.value)}
        />  
       <label>Blog body:</label>
            <textarea required={true}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            >

         </textarea>
             <label>Blog author:</label>
             <input
             value={author}
             onChange={(e) => setAuthor(e.target.value)}
             required={true}
             placeholder='Author name'
             />     
              <button>Add Blog</button>
               
          
      </form>
      </>



   
  ) 
}
export default Create