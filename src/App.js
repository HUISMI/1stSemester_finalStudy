import React from 'react';
import './App.css'; // import css 경로
import Box from "./Box";

function App() {

  let post = '빵빵~ 빵빵~ C조 나간다~'
  
  return (
    <div className="App"> 
      <div className="black-nav">
        
      </div>
      <h4 className="post-title">{post}</h4>
      <div className="main-title-container">
        <img src={`${process.env.PUBLIC_URL}/glowing_C.png`} alt="Glowing C" className="main-title" />
      </div>
      <div className="box-container">
        <Box name="박유나" major="경영학부" want="FRONTEND"/>
        <Box name="심성민" major="산업보안학과" want="BACKEND"/>
        <Box name="손다혜" major="건설환경플렌트공학과" want="FRONTEND"/>
        <Box name="이소율" major="경영학부" want="FRONTEND"/>
        <Box name="오휘민" major="소프트웨어학부" want="BACKEND"/>
      </div>
      다들 정말 재미있는 1학기 스터디 만들어줘서 너무 고맙고,<br></br>
      같이 여행도 다녀올만큼 많이 친해질 수 있어서 좋았어<br></br><br></br>
      덕분에 1학기가 더 즐거웠던 것 같아. 앞으로도 더 친하고 재밌게 지내자!
    </div>
  );
}

export default App;



//App.js -> main 페이지 
/* 여기가 js 파일인데 html 코드도 동작하는 이유는
index.js파일이 index.html로 App.js를 이어주는 역할을
수행하기 때문이다.*/
/*실은 이러한 js속 html언어는 html언어라기 보단 jsx라는 
html 대용품으로 보는게 맞다.*/

// className이라고 써야함 Jsx언어에서. - 문법규칙1
// 변수 넣을 때에는 {중괄호} 사용하기 - 문법규칙2 = 데이터바인딩은 {중괄호}
// style 넣을 땐 style = {{이름 : '값}}
