// pages/home/home.js
Page({
  data:{
    name: "liuzilong",
    age:34,
    teamer:[
      {name:'gaoyong',age:35},
      {name:'gongshanshan',age:30},
      {name:'wangduanzhen',age:31}
    ],
    count:0
  },
  zengjia(){
    this.setData({
      count:this.data.count+1
    }
        
    )

  },
  jianshao(){
    if (this.data.count>0) {
      this.setData({
        count:this.data.count-1
      })
    }
    

  }
})