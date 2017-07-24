export default ({state, content, assets, bundle}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>React Redux Isomorphic</title>

      <link href="/styles/bootstrap.min.css" rel="stylesheet" />
      <link href="${assets.main.css}" rel="stylesheet" />
      <script>
        window.__INITIAL_STATE__ = ${state};
      </script>
    </head>

    <body>
      <div id="wrapper">${content}</div>
      <script async defer src="${assets.main.js}"></script>
    </body>
  </html>
`);
