<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style type="text/css">
    .list{
      margin: 0 auto;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      width:100%;
    }
    .item{
      margin: 0 24px 24px 0;
      display: block;
      padding: 12px;
      width: 300px;
      border-radius: 12px;
      background-color: #fad44922;
      cursor: pointer;
      color:#000;
    }
    .item-head{
      display: flex;
    }
    .item-head__logo{
      width: 30px;
      height: 30px;
    }
    .item-head__name{
      margin-left: 12px;
      line-height: 30px;
      font-size: 28px;
    }
    .item__des{
      margin-top: 12px;
    }
  </style>
</head>
<body>
  <ul class="list">
    <a class="item" href="https://bingozb.github.io/">
      <div class="item-head">
        <img class="item-head__logo" src="/assets/img/bingo_logo.png"></img>
        <span class="item-head__name">Bingo</span>
      </div>
      <div class="item__des">
        My brother Bingo, also our CTO.
      </div>
    </a>
    <a class="item" href="http://blog.vane.ren/">
      <div class="item-head">
        <img class="item-head__logo" src="/assets/img/vane_logo.jpg"></img>
        <span class="item-head__name">Subin Vane</span>
      </div>
      <div class="item__des">
        My brother Subin Vane, work at Android with Java.
      </div>
    </a>
    <a class="item" href="http://blog.jschen.cc/">
      <div class="item-head">
        <img class="item-head__logo" src="/assets/img/logo.png"></img>
        <span class="item-head__name">JSChen</span>
      </div>
      <div class="item__des">
        Is me,Sunny and handsome boy
      </div>
    </a>
  </ul>
</body>
</html>
