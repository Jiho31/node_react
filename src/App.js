import React, { useRef, useState } from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <>
     <Header name="Jiho" />
    </>
  )
}

// function App() {
//   const name = 'react';
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: 24, // 기본 단위 px
//     padding: '1rem', // 다른 단위 사용 시 문자열로 설정
//   }
//   return (
//     <>
//     {/* 우와앙 주석이다 */}
//     /* {} 없이 쓰면 화면에 나타남 */
//       <Hello name="react" color="red"/>
//       <div style={style}>{name}</div>
//       <div className="gray-box"></div>
//       <Hello />
//     </>
//   );
// }

export default App;
