import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TechInfo() {
// {techData}
  const [techData, setTechData] = useState([]);

  function getText(html) {
    var divContainer = document.createElement("div");
    divContainer.innerHTML = html;
    return divContainer.textContent || divContainer.innerText || "";
  }
  useEffect(() => {
    fetch(
"https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Climbing_hold&prop=text&section=9&disabletoc=1&contentformat=text%2Fjavascript&templatesandboxcontentmodel=text&origin=*"    
      )
      .then((r) => r.json())
      .then((data) => setTechData(data));

  }, []);
  const yourString = techData.parse;

  console.log(yourString);



  return (
    <Box sx={{ mb: 1.5, align: 'center', display: 'block',  backgroundColor: 'white', }}>
      <Typography sx={{ mb: 1.5, textAlign: 'left', display: 'block' }} color="text.secondary">
        {techData.parse && (
          <div dangerouslySetInnerHTML={{ __html: yourString.text["*"] }} />
        )}
      </Typography>
    </Box>
  );
}

export default TechInfo;
