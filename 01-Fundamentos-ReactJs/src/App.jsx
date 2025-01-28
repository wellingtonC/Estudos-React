import { Header } from "./components/Header"
import {Post} from "./Post"
import './styles.css';


export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Wellington Carvalho"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
      />
      <Post
        author="Wellington Carvalho"
        content="Um novo post muito legal"
      />
    </div>
  )
} 