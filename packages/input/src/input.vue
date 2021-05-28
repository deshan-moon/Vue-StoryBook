<template>
  <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
</template>
<script>
export default {
  name:'Input',
  inheritAttrs:false,
  props:{
    value:{
      type:String
    },
    type:{
      type:String,
      default:'text'
    }
  },
  methods:{
    handleInput (evt) {
      this.$emit('input', evt.target.value)
      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'FromItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if (parent) {
        // 触发自定义事件
        parent.$emit('validate')
      }
    }
  }
}
</script>
