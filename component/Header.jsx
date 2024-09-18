import TabButton from "./TabButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faArrowTrendUp} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {faRss} from "@fortawesome/free-solid-svg-icons";
import SelectBox from "./SelectBox";
// eslint-disable-next-line react/prop-types
export default function Header({ trend, selectTab }) {
  return (
    <> 
      <header>
        <div className="header-block">
          <div className="headerLogo">
            <h1>velog</h1>
          </div>
          <div className="header_right"> 
              <div className="header_icon">              
              <FontAwesomeIcon icon={faBell} className="Bell" />
              </div>

              <div className="header_icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search"/>
              </div>        
              <button className="write_box">새 글 작성</button>    
                 
            </div>
        </div>
       
      </header>

        <div className="nav">
          <div className="homeTab_left">
            {/* onClick={trend} */}
            {/* 2.  onClick={()=>trend()} */}
            <FontAwesomeIcon icon={faArrowTrendUp} />
            <span><TabButton className="trening_box" onClick={() => trend("trending")} isSelected={selectTab === "trending"}>
              트렌딩
            </TabButton></span>
            <FontAwesomeIcon icon={faClock} />
            <span>
            <TabButton onClick={() => trend("latest")} isSelected={selectTab === "latest"}>
              최신
            </TabButton></span>
            <FontAwesomeIcon icon={faRss} />
            <span><TabButton onClick={() => trend("feed")} isSelected={selectTab === "feed"}>
              피드
            </TabButton></span>
          </div>
          <div className="homeTab_right"> 
           <SelectBox></SelectBox>

          </div>
        </div>
     
    </>
  );
}
