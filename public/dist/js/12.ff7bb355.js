/*! 最终版权归**所有 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{237:function(e,s){},283:function(e,s,t){"use strict";t.r(s),(o=function(){var e=this,s=e.$createElement;return(s=e._self._c||s)("div",{staticClass:"verification-code"},[s("div",{staticClass:"form"},[s("div",{staticClass:"phone"},[s("div",{staticClass:"phone-label"},[e._v("手机号")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"phone-input",attrs:{type:"number",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{blur:e.checkPhone,input:function(s){s.target.composing||(e.phone=s.target.value)}}})]),e._v(" "),s("div",{staticClass:"code"},[s("div",{staticClass:"code-label"},[e._v("验证码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"code-input",attrs:{type:"number",placeholder:"请输入验证码"},domProps:{value:e.code},on:{blur:e.checkCode,input:function(s){s.target.composing||(e.code=s.target.value)}}}),e._v(" "),s("input",{ref:"sendCode",staticClass:"send-code",attrs:{type:"button",value:e.msg},on:{click:e.sendCode}})]),e._v(" "),s("div",{staticClass:"new-password"},[s("div",{staticClass:"new-password-label"},[e._v("新密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],staticClass:"new-password-input",attrs:{type:"text",placeholder:"请输入新密码"},domProps:{value:e.newPassword},on:{blur:e.checkNewPassword,input:function(s){s.target.composing||(e.newPassword=s.target.value)}}})]),e._v(" "),s("div",{staticClass:"confirm-password"},[s("div",{staticClass:"confirm-password-label"},[e._v("确认密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"confirm-password-input",attrs:{type:"text",placeholder:"请输入再次输入新密码"},domProps:{value:e.confirmPassword},on:{blur:e.checkConfirmPassword,input:function(s){s.target.composing||(e.confirmPassword=s.target.value)}}})]),e._v(" "),s("div",{staticClass:"next"},[s("input",{staticClass:"next-input",attrs:{type:"button",value:"下一步"},on:{click:e.next}})])])])})._withStripped=!0;var o,i=t(236),n=t.n(i);i={name:"VerificationCode",data:function(){return{msg:"发送验证码",phone:"",code:"",testCode:!1,err:"",testPhone:!1,isActive:!1,newPassword:"",testNewPassword:!1,confirmPassword:"",testConfirmPassword:!1,isBool:!1,time:60}},methods:{changeMsg:function(){var e=this,s=setInterval((function(){0<e.time?(e.time=e.time-1,e.msg=e.time+"s"):(e.msg="重新获取",clearInterval(s),e.isActive=!1)}),1e3);this.time=60},checkPhone:function(){/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.phone)?this.testPhone=!0:(this.$message({message:"手机号码格式错误！",type:"warning"}),this.testPhone=!1)},checkCode:function(){/[0-9]{6}/.test(this.code)?this.testCode=!0:this.$message({message:"验证码格式错误！",type:"warning"})},checkNewPassword:function(){/^(?![^a-zA-Z]+$)(?!\\D+$).{8,16}$/.test(this.newPassword)?this.testNewPassword=!0:(this.$message({message:"密码必须包含数字和字母8~16位！",type:"warning"}),this.testNewPassword=!1)},checkConfirmPassword:function(){this.newPassword==this.confirmPassword?this.isBool=!0:(this.$message({message:"两次输入密码不一致！",type:"warning"}),this.isBool=!1)},sendCode:function(){var e=this;console.log("进入发送验证码"),this.testPhone?this.axios.get("/account/getRegisterCode?phone="+this.phone).then((function(s){console.log(s),200==s.data.code&&(e.isActive=!0,e.isActive=!0,e.changeMsg())})).catch((function(s){e.$message.error("请求超时，服务器错误！")})):this.$message({message:"请输入手机号码！",type:"warning"})},next:function(){var e,s=this;console.log(this.isBool),1==this.testPhone&&1==this.testCode&&1==this.isBool?(e={phone:this.phone,code:this.code,passWord:this.confirmPassword},console.log(n.a.stringify(e)),this.axios.post("/account/resetPwdByPhone",n.a.stringify(e)).then((function(e){200==e.data.code?s.$router.push({path:"/modifiedSuccessfully"}):400==e.data.code&&(console.log(e),s.$message({message:"修改失败！",type:"warning"}))}))):this.$message({message:"请按步骤填写信息！",type:"warning"})}}},t=t(79);(o=Object(t.a)(i,o,[],!1,null,"3d0054d8",null)).options.__file="src/pages/findPassword/childComps/VerificationCode.vue",s.default=o.exports}}]);