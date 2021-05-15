const express = require("express");
const queryString = require("querystring")
const app = express();
const pool = require("./pool")

// 设置public为静态文件夹
app.use(express.static("public"));

// 获取沙发数据
app.get("/findSofa", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log("接受到请求/findSofa")
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.sendFile(__dirname + "/data/sofa.json")
})

// 加入到购物车
app.get("/addToCart", (req, res) => {
  console.log("接受到请求/addToCart")
  res.setHeader("Access-Control-Allow-Origin", "*")
  let params = req.url.split('?')[1];
  params = queryString.parse(params)
  console.log(params)

  var sql1 = "SELECT * FROM t_cart WHERE p_name = ?"
  pool.query(sql1, [params.name], (err, results, fields) => {
    console.log(results)
    if (results.length !== 0) {
      // 表中已存在该数据，count+1
      console.log("该数据已存在")

      var sql2 = "SELECT p_count FROM t_cart WHERE p_name=?"
      pool.query(sql2, [params.name], (err, results, fields) => {
        if (results.length !== 0) {
          // 获取数据库表中的count并让count+1
          let count = results[0].p_count +1

          // 数据库更新语句
          var sql3 = "UPDATE t_cart SET p_count=? WHERE p_name=?"
          // 更新该条数据的count
          pool.query(sql3, [count,params.name], (err,results,fields)=>{
              if(err){
                throw err
              }else{
                res.send("200")
                console.log("count+1成功！")
              }
          })
        }
      })
    } else {
      // 表中未存在该数据
      // 数据库添加数据语句
      var sql3 = "INSERT INTO t_cart SET p_src=? , p_name=? , p_describe=? , p_price=? , p_count=1";
      // 向数据库添加数据
      pool.query(sql3, [params.src, params.name, params.describe, params.price], (err, results, fields) => {
        if (err) {
          throw err
        } else {
          console.log("保存商品数据成功")
          res.send("200")
        }
      })
    }
  })
})


app.listen(3000, () => {
  console.log(`server run at http://localhost:3000`);
})
