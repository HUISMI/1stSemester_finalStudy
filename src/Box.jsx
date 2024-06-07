import React from 'react';
import './Box.css';

function Box(props) {
  return (
    <div className="box">
      <h3>{props.name}</h3>
      <p>{props.major}</p>
      <h4>{props.want}</h4>
    </div>
  );
}

export default Box;
 //Box라는 컴포넌트를 추출할 준비 완료
//<button onClick={clickMe}>BUTTON</button>