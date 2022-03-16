import React, { useState, useEffect } from "react";


function Technique () {

    const [techData, setTechData] = useState([])
    useEffect(() => {
        fetch("https://en.wikipedia.org/w/api.php?action=parse&page=Climbing_hold&section=9&prop=wikitext&format=json&origin=*")
          .then((r) => r.json())
          .then((data)=>setTechData(data))
          // .then((data) => setBGData(data));
      }, []);

      console.log(techData.parse)

      return(
        <div>
        <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
        <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
        <img src="https://media0.giphy.com/media/638KU8suvbVGo/giphy.gif?cid=ecf05e47jh7y1s5ni4utwk0xqe3mfcj1umdb694qwioagiio&rid=giphy.gif&ct=g" alt="logo" />
<p>
{/* {techData.parse.wikitext} */}
</p>
</div>
      )
}

export default Technique