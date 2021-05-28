import LgFormItem from "../"

export default {
  title: 'LgFormItem',
  component: LgFormItem
}

export const formItem = () => ({
  components: { LgFormItem },
  template: `  <div>
  <label>{{ label }}</label>
  <div>
    <slot></slot>
    <p v-if="errMessage">{{ errMessage }}</p>
  </div>
</div>`,
  inject: ['form'],
  data() {
    return {
      errMessage: ''
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  methods: {
    validate() {
      if (!this.prop) return;
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const descriptor = { [this.prop]: rules }
      const validator = new AsyncValidator(descriptor)
      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })
    }
  }
})