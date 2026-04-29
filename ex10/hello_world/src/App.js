// 1. 引入 React 和 useState 鉤子
import React, { useState } from 'react';
import './App.css';

function App() {
  // 2. 定義狀態，初始值為原本的 "Hello CGU!"
  const [displayText, setDisplayText] = useState("Hello CGU!");

  // 3. 定義點擊事件處理函數
  const handleClick = () => {
    // 當被點擊時，更新 displayText 的值為圖片中的內容
    setDisplayText("hello CGU!!被點了被點了被點了被點了被點了被點了");
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* 4. 將 displayText 狀態綁定到 h1，並加上 onClick 事件 */}
        <h1 className="cgu-title" onClick={handleClick}>
          {displayText}
        </h1>
        {/* 提示使用者可以點擊 */}
        <p style={{ color: '#666', fontSize: '14px' }}></p>
      </header>
    </div>
  );
}

export default App;