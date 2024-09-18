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
    <div className="mainResponsive">
      <Header trend={HandleSelect} selectTab={selectTab} />
      
      <div className="HomeLayout">
      <main>
        <div className="cardBlock">
        {posts.map((post) => (
          <PostCard className="postCard" key={post.id} {...post} />
        ))}
        </div>
      </main>
      </div>
      </div>
    </>
  );
}

export default App;
