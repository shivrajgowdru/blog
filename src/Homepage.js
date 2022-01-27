
import Bloglist from './Bloglist'
import "./Homepage.css"
import useFetch from './useFetch'


function Homepage() {

   const {data , error , ispending} = useFetch('http://localhost:8000/blogs')
  
  return (
   <div className="content">
      { error && <div>{error}</div>}
      { ispending && <div>Loading ...</div> }
  { data && <Bloglist logs={data} title="All Blogs!"/>}
   {/* here blogs is checked if it is true or false (&&) conditional template */}
    </div>
  )
}

export default Homepage
