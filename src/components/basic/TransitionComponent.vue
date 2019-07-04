<template>
  <transition :name="name">
    <slot v-if="show" />
  </transition>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'fade'
    }
  },
  data () {
    return {
      show: true
    }
  },
  mounted () {
    this.show = false
  }
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
