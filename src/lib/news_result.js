module.exports = {
  HTML: cid => {
    return `
      <html>
        <head>
        </head>
        <body>
          <div> 이곳은 뉴스 결과를 출력해주는 lib/news_result.js입니다.</div>
          <div></div>
          <div>현재 ${cid}의 뉴스들입니다.</div>
        </body>
      </html>
    
    `;
  }
};
