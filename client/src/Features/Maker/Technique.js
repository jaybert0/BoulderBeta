import React, { useState, useEffect } from "react";


function Technique (
  // {techData}
  ) {
  const [techData, setTechData] = useState([])

  function getText(html){
    var divContainer= document.createElement("div");
    divContainer.innerHTML = html;
    return divContainer.textContent || divContainer.innerText || "";
}
useEffect(() => {
  fetch("https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Climbing_hold&prop=text&section=9&sectionpreview=1&formatversion=2&origin=*")
    .then((r) => r.json())
    .then((data)=>setTechData(data))
    // .then((data) => setBGData(data));
}, []);
const yourString= techData.parse

console.log(yourString)

      // console.log(techData.parse.text)

      return(
        <div>
        <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
        <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
        <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
{/* <p> */}
{techData.parse && <div dangerouslySetInnerHTML={{ __html: yourString.text }} />}
{/* </p> */}
</div>
      )
}

export default Technique