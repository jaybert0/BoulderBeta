import React, { useState, useEffect } from "react";


function Technique ({techData}) {

  function getText(html){
    var divContainer= document.createElement("div");
    divContainer.innerHTML = html;
    return divContainer.textContent || divContainer.innerText || "";
}

const yourString= techData.parse.text

console.log(yourString)

      // console.log(techData.parse.text)

      return(
        <div>
        <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
        <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
        <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
{/* <p> */}
{techData && <div dangerouslySetInnerHTML={{ __html: yourString }} />}
{/* </p> */}
</div>
      )
}

export default Technique