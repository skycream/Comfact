module.exports = {
  HTML: (subject, publisher, list) => {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Comfact</title>
          <meta charset='utf-8'>
        </head>
        <body>
          <table style="width:100%;">
            <tr>
              <th colspan='2'>Subject</th>
              <th>by</th>
            </tr>
            <tr>
              <td>[단독]국민 메신저 카카오톡에 암호화폐 지갑 탑재된다
</td>
              <td>파이낸셜 뉴스</td>
            </tr>
            <tr
              <td>${subject}</td>
              <td>${publisher}</td>
            </tr>               
          </table>
          ${list}
        </body>
      </html>
    `;
  },
  list: filelist => {
    let list = "<div>이곳은 lib/news_main.js 입니다.</div>";
    return list;
  }

  // DB에 저장된 뉴스들을 전부 리스트 형식으로 만들어서 올리면됨.
};
