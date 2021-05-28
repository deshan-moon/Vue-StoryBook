import LgForm from "../"
import LgFormItem from "../../formitem"
import LgInput from "../../input"
import LgButton from "../../button"

export default {
  title: 'LgForm',
  component: LgForm
}

export const Login = () => ({
  components: { LgInput, LgFormItem, LgForm, LgButton },
  template: `<lg-form class="form" ref="form" :model="user" :rules="rules">
  <lg-form-item label="用户名" prop="username">
    <lg-input type="text" v-model="user.username" placeholder="请输入用户名"></lg-input>
  </lg-form-item>
  <lg-form-item label="密码" prop="password">
    <lg-input type="password" v-model="user.password"  placeholder="请输入密码"></lg-input>
  </lg-form-item>
  <lg-form-item>
    <lg-button type="primary" @click="login">登 录</lg-button>
  </lg-form-item>
</lg-form>`,
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})