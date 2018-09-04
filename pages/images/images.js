// pages/images/images.js
var url  = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[],
    
  
  },
  handleimg:function(e){
   wx.previewImage({
     current: 'https://goss.veer.com/creative/vcg/veer/612/veer-' + e.target.id + '.jpg',
    urls: [...url]
   })
  },
   //设置urls
   seturls:function(){
    let imagess = [...this.data.images];
    return imagess.map(item=>{
      item = 'https://goss.veer.com/creative/vcg/veer/612/veer-' + item.id + '.jpg';
    })
   },
  /**
   * 
   * 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.request({
      url: 'https://www.veer.com/ajax/search',
      success:req=>{
        console.log(req.data.data.list)
        this.setData({
          images: req.data.data.list
        })
        url = (()=> {
          let imagess = [...this.data.images];
          return imagess.map(item =>item = 'https://goss.veer.com/creative/vcg/veer/612/veer-' + item.id + '.jpg')
        })();

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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})