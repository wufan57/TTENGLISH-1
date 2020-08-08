// pages/exam/exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: [{ id: 1, name: '已掌握', status:true }, { id: 2, name: '已关注', status:false }],
    chooseparameter: 1
  },

   // 参数点击响应事件
   parameterTap:function(e){//e是获取e.currentTarget.dataset.id所以是必备的，跟前端的data-id获取的方式差不多
    // console.log(e.currentTarget.dataset.id)
    var that=this
    var this_checked = e.currentTarget.dataset.id
    var parameterList = this.data.parameter


    for (var i = 0; i < parameterList.length; i++){
      if (parameterList[i].id == this_checked){
        parameterList[i].status = true;
      }
      else{
        parameterList[i].status = false;//其他的位置为false
      }
    }
    that.setData({
      parameter: parameterList,
      chooseparameter: this_checked
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
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