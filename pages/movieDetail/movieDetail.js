let appDates = getApp();
Page({
  data: {
      movie:{}
  },
  onLoad: function (options) {
      this.setData({
          movie: appDates.data.movies[options.id]
      })
  },
})