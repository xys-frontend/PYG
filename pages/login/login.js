// pages/login/login.js
Page({

 handelGetUserInfo(e){
	 // console.log(e);
	 const {userInfo}=e.detail;
	 wx.setStorageSync("userInfo",userInfo);
	 wx.navigateBack({
		 delta:1
	 });
 }
})