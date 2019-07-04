<template>
  <transition-component>
    <div
      class="loading-wrap"
    >
      <div class="lineBar-wrap">
        <span
          v-for="index in 15"
          :key="index"
          class="lineBar"
        />
      </div>
      <div class="loading-text">
        Loading<span class="dot">&nbsp;.</span><span class="dot">&nbsp;.</span><span class="dot">&nbsp;.</span>
      </div>
    </div>
  </transition-component>
</template>

<script>
import TransitionComponent from './basic/TransitionComponent'

export default {
  components: {
    TransitionComponent
  }
}
</script>
