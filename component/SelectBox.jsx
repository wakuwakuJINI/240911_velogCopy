import { useState } from "react";

export default function SelectBox(){
 
    const[selectedOption,setSelectedOption]=useState("이번주");
    const selectChange=(e)=>{
        setSelectedOption(e.target.value);
    }
    return<>
    <div className="selectbox_container">
        <select value={selectedOption} onChange={selectChange} className="select_box">
            <option>오늘</option>
            <option>이번 주</option>
            <option>이번 달</option>
            <option>올해</option>
        </select>
    </div>
    </>
}
