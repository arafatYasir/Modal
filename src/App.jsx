import { useEffect, useState } from "react"
import Modal from "./Modal"
import PostBtn from "./PostBtn";

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <>

      <div className="post-buttons">
        {
          posts.map(post => <PostBtn key={post.id} post={post} />)
        }
      </div>

    </>
  )
}

export default App
