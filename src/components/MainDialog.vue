<template>
  <div>
      <div class="dialog">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0007;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>