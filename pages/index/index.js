Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: ["首页", "动画", "番剧", "国创", "音乐", "鬼畜", "音乐", "饭局", "生活", "鬼畜", ],
    currentIndex: 0,
    swiperList: [{
      src: "../../image/1.jpg"
    }, {
      src: "../../image/2.jpg"
    }, {
      src: "../../image/1.jpg"
    }],
    videoList: [{
      id: 1,
      content: "杭州西湖哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }, {
      id: 2,
      content: "杭州西湖",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }, {
      id: 3,
      content: "杭州西湖",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }, {
      id: 4,
      content: "杭州西湖",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }, {
      id: 5,
      content: "杭州西湖",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }, {
      id: 6,
      content: "杭州西湖",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }, {
      id: 7,
      content: "杭州西湖",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }, {
      id: 8,
      content: "杭州西湖",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }, {
      id: 9,
      content: "杭州西湖",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }, {
      id: 10,
      content: "杭州西湖",
      imgSrc: "../../image/video.jpg",
      videoSrc: ""
    }]
  },
  activeNav(e) {
    this.setData({
      currentIndex: e.target.dataset.index
    })
    console.log(111)
  },
  // 获取首页的首行数据
  getNavList() {
    wx.request({
      url: '',
      success: function(res) {
        // this.data.videoList="1111"
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})