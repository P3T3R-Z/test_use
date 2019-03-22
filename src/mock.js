import Mock from "mockjs";
import * as Cookies from "js-cookie";
const Random = Mock.Random;
let navobj = [
  {
    id: "1",
    name: "商城管理",
    level: 1,
    child: [
      {
        id: "1-1",
        name: "服装",
        child: [
          {
            id: "1-1-1",
            name: "女装"
          },
          {
            id: "1-1-2",
            name: "男装"
          }
        ]
      },
      {
        id: "1-2",
        name: "食品",
        child: [
          {
            id: "1-2-1",
            name: "罐头"
          },
          {
            id: "1-2-2",
            name: "海鲜"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "售后管理",
    level: 1,
    child: [
      {
        id: "2-1",
        name: "配送进度"
      },
      {
        id: "2-2",
        name: "评论管理"
      }
    ]
  },
  {
    id: "3",
    name: "销售报表",
    level: 2,
    child: [
      {
        id: "3-1",
        name: "可视化数据"
      },
      {
        id: "3-2",
        name: "列表数据"
      }
    ]
  }
];
var navData = {
  nav: navobj
};

Mock.mock("/api/nav", "post", navData);

var userslist = [
  {
    id: "admin",
    psw: "123",
    session_id: Random.guid(),
    level: 2,
    class: "管理人员"
  },
  {
    id: "123",
    psw: "123",
    session_id: Random.guid(),
    level: 1,
    class: "客服"
  }
];
let loginResponse = {
  status: 0,
  msg: "登陆失败",
  data: ""
};
Mock.mock("/api/login", "post", function(options) {
  try{
    var query = JSON.parse(options.body);
    userslist.forEach(i => {
      if (i.id == query.id && i.psw == query.psw) {
        loginResponse.data = {
          session_id: i.session_id,
          level: i.level,
          id: i.id,
          class: i.class
        };
  
        loginResponse.status = 1;
        loginResponse.msg = "登陆成功";
        throw new Error("ending");
      } else {
        loginResponse = {
          status: 0,
          msg: "账号或密码错误",
          data: ""
        };
      }
    });
  } catch(e) {
    console.log(e.message)
  }
  
  return loginResponse;
});


Mock.mock('/api/logout', 'post', function() {
  Cookies.remove('session_id');
  Cookies.remove('user_level');
  return {
    status: 1,
    msg: '退出成功'
  }
})