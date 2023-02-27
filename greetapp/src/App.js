import React from 'react'
import './App.css';

export default function App() {
  let todayDate = new Date();
let currDate = todayDate.getHours();
let greeting = "";
let cssStyle = {};

if(currDate >= 1 && currDate < 12){
greeting = 'Good Morning!';
cssStyle.color = "green";
}
else if(currDate >= 12 && currDate < 16){
  greeting = 'Good Afternoon!';
cssStyle.color = "blue";

}
else if(currDate >= 16 && currDate < 20){
  greeting = 'Good Evening!'
}

else{
  greeting = 'Good Night!'
}

  return (
    <div>
      <p className='head1'>Hello peeps <span style={cssStyle}>{greeting}</span> </p>

    </div>
  )
}

