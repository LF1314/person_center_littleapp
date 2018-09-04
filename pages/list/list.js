// pages/list/list.js
var appdata = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:[],
    imgs:[]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var time=+new Date();
    wx.request({
      
      url: 'https://m.toutiao.com/list/?tag=news_fashion&ac=wap&count=20&format=json_raw&as=A165DB27BFACEAE&cp=5B7F7CAE5AAEBE1&min_behot_time=0&_signature=ch71FwAAKWPYMbWXWXa0r3Ie9Q&i=',
    
 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res=> {
        appdata.news=res.data.data;
        this.setData(
          {
            news: res.data.data
          }
        )
      }
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.request({
      url: 'https://m.toutiao.com/list/?tag=news_world&ac=wap&count=20&format=json_raw&as=A165EBE75FECC98&cp=5B7FDC0C69789E1&min_behot_time=0&_signature=ch71FwAAKWPYMbWXWXa0r3Ie9Q&i=',
      success:res=>{
       this.setData({
         news:[...appdata.news,...res.data.data]
       })
      }
    })
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})