import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//font-family: 'Josefin Sans', sans-serif;


const inlinestyle= {
  fontSize:'32px',
  color:'red',
  fontFamily: '"Josefin Sans", sans-serif"',
}
const currenttime = new Date().toLocaleTimeString();
//y-m-day-time const time = new Date(2022,12,17,20).getHours();
const time = new Date().getHours();

let greeting = '';
const csscolor = {};
if(time >= 1 && time < 12){

  greeting = 'Good Morning';
  csscolor.color = "blue"; 

}else if(time >= 12 && time < 17){
  greeting = 'Good Afternoon';
  csscolor.color='orange';
}else{
  greeting = 'Good Night';
  csscolor.color='black';
}

ReactDOM.render(
  <> 
  <div className='box'>
  <h1>Hello Sir! <span style={csscolor}>{greeting} </span> </h1> 
  <h1>{currenttime}</h1>
</div> </>,
  document.getElementById('root')
);