<template>
  <button v-bind="$attrs" @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name:'Button',
  inheritAttrs:false,
  props:{
    type:{
      type:String
    },
  },
  methods:{
    handleClick(evt){
      this.$emit('click',evt)
      evt.preventDefault();

      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === "FromItem"){
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if(parent){
        parent.$emit('validate')
      }
    }
  }
}
</script>
