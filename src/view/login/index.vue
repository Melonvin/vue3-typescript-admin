<script setup lang="ts">
import { LoginData } from '@/api/user/models/login'
import { useUserStore } from '@/store/user'
import { UserActionType } from '@/store/user/actions'
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
const username = ref('admin')
const password = ref('admin')
const loading = ref(false)
const store = useUserStore()

const login = async () => {
  loading.value = true

  store.login(new LoginData(username.value, password.value))
}
</script>

<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="logo-wrapper">
        <div class="logo-inner"></div>
      </div>

      <div class="login-form-wrapper">
        <div class="login-form-inner">
          <h2>欢迎登录</h2>
          <p>Welcome to login</p>

          <el-form>
            <el-form-item>
              <el-input
                v-model="username"
                clearable
                :prefix-icon="User"
                size="large"
                placeholder="请输入账号"
                :disabled="loading"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-input
                v-model="password"
                type="password"
                clearable
                :prefix-icon="Lock"
                size="large"
                placeholder="请输入密码"
                :disabled="loading"
              ></el-input>
            </el-form-item>
          </el-form>

          <el-button
            :loading="loading"
            type="primary"
            size="large"
            @click="login"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$width: 52%;
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2b2b;
  .login-wrapper {
    height: 500px;
    width: 780px;
    display: flex;

    & > div {
      height: 100%;
    }
    .logo-wrapper {
      width: 100% - $width;
      display: flex;
      align-items: center;
      .logo-inner {
        width: 100%;
        height: 80%;
        border-radius: 24px 0 0 24px;
        background: url(../../assets/bg-image.jpg) 20% / auto 100% no-repeat;
        filter: brightness(80%);
      }
    }

    .login-form-wrapper {
      width: $width;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 24px;
      padding: 40px;
      background: #ffffff;

      .login-form-inner {
        text-align: center;

        h2 {
          margin: 0;
        }

        p {
          margin-top: 6px;
          font-weight: 700;
          color: #c7c9cf;
          letter-spacing: 5px;
        }

        .el-form {
          margin: 40px 0;
        }
        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
