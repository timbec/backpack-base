<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }

            .bar-legend li {
               float: left;
               list-style: none;
               width: 100%;
            }

            .bar-legend span {
               width: 10px;
               height: 10px;
               display: inline-block;
               margin-right: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="title">Chart JS</div>
                  <h1>League Wins</h1>
                  <div>
                      <wins-graph :player="{{ json_encode($cody)}}" :opponent=
                      "{{ json_encode($angel) }}"></wins-graph>
                  </div>



            </div>
        </div>

        <script src="/js/main.js"></script>
    </body>
</html>
