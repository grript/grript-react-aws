import React from 'react';


console.log('rocks 22');
console.log('rocks 23');
var object = document.getElementById("rocks");
object.onmouseover = function(){
  console.log('rocks 3');
  document.documentElement.classList.add('overflow-hidden');
};
const MakeHtmlHoverflowHidden = () => {

  return (
      <div>
      </div>  
  );
}



export default MakeHtmlHoverflowHidden;