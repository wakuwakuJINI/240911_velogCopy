import "./App.css";
import { useState } from "react";
import Header from "./component/Header";
import { postData } from "./data/DUMMY_DATA";
import PostCard from "./component/PostCard";

function App() {
  const [selectTab, setSelectTab] = useState("trending");
  const posts = postData[selectTab];

  function HandleSelect(Tab) {
    setSelectTab(Tab);
  }
  return (
    <>
      <Header trend={HandleSelect} selectTab={selectTab} />

      <main>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </main>
    </>
  );
}

export default App;
