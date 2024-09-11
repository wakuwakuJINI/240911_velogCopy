import TabButton from "./TabButton";

export default function Header({ trend, selectTab }) {
  return (
    <>
      <header className="header">
        <h1>title</h1>
        <div className="nav">
          <nav>
            {/* onClick={trend} */}
            {/* 2.  onClick={()=>trend()} */}
            <TabButton onClick={() => trend("trend")} isSelected={selectTab === "trend"}>
              트렌딩
            </TabButton>
            <TabButton onClick={() => trend("latest")} isSelected={selectTab === "latest"}>
              최신
            </TabButton>
            <TabButton onClick={() => trend("feed")} isSelected={selectTab === "feed"}>
              피드
            </TabButton>
          </nav>
        </div>
      </header>
    </>
  );
}
