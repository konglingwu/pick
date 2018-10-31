<template>
  <div class="login">
    <div class="content">
      <div class="top">
        <div class="header">
          <a href="#">
            <img src="@/assets/images/logo.png">
            <span>PICK MANAGER</span>
          </a>
        </div>
        <div class="desc">PICK MANAGER 是软件园最具有影响力的后台</div>
      </div>
      <div class="main">
        <div class="login_main">
          <div class="title">
            账号密码登录
          </div>
          <div class="border"></div>
          <div class="form">
            <el-form :model="req" :rules="rules" ref="req">
              <el-form-item class="account" prop="username">
                <el-input
                  placeholder="请输入账号~"
                  v-model="req.username"
                  @keyup.enter.native="submitLogin">
                  <template slot="prefix">
                    <img src="@/assets/images/account.svg">
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item class="pwd" prop="password">
                <el-input
                  placeholder="请输入密码~"
                  type="password"
                  v-model="req.password"
                  @keyup.enter.native="submitLogin">
                  <template slot="prefix">
                    <img src="@/assets/images/pwd.svg">
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item class="captch" prop="captcha">
                <img :src="captchaImg" @click="changeCaptcha">
                <el-input
                  placeholder="请输入验证码"
                  v-model="req.captcha"
                  :autofocus="!!req.captcha"
                  @keyup.enter.native="submitLogin"></el-input>
              </el-form-item>
              <el-form-item class="check-pwd">
                <el-checkbox v-model="autoLogin">自动登录</el-checkbox>
                <a @click="forgetPwd">忘记密码</a>
              </el-form-item>
              <el-form-item class="login-btn">
                <el-button type="primary" @click="submitLogin">登  录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '@/api';
export default {
  data() {
    return {
      req: {
        username: "", // 用户名
        password: "", // 密码
        captcha: "" // 验证码
      },
      autoLogin: true,
      captchaImg: "", // 验证码图片
      rules: {
        username: [{ require: true, message: "请输入账号", trigger: "blur" }],
        password: [{ require: true, message: "请输入密码", trigger: "blur" }],
        captcha: [{ require: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  created() {
    // 验证码
    this.changeCaptcha();
  },
  methods: {
    /* 数据请求 */

    // 验证码
    changeCaptcha() {
      this.captchaImg = `http://dev.manager-api.pickdoki.com/api/captchas?width=100&height=36&random=${Math.random()}`;
      this.req.captcha = ""; // 初始化
    },
    /* 业务处理 */

    // 忘记密码
    forgetPwd() {
      alert(`忘记密码只能联系开发人员！💥`);
    },

    // 登录
    submitLogin() {
      // this.$refs.from.validate(valid => {
      //   if (valid) {
      //     login(req).then(res =>{
      //        console.log(res);
      //     });
      //   }
      // });
      this.$refs.req.validate(valid => {
        if (valid) {
          // this.$http.post('tokens', this.form)
          // .then(res => {
          // })
        } else {
          return false
        }
      })      
    }
  }
};
</script>

