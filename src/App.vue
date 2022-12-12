<template>
  <div>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
    max-width: 650px;
    display: block;
    margin: 0 auto;
}

.button {
    border: 3px solid rgb(98, 180, 122);
    background: rgb(98, 180, 122);
    color: #fff;
    font-size: 20px;
    height: 60px;
    width: 20%;
    margin-left: 10px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-bottom: 20px;
    margin-left: 0px;
    font-weight: bold;
}

.button.red {
    background: tomato;
    border-color: tomato;
}

.button.silver {
    background: silver;
    border-color: silver;
}

.button:hover {
    opacity: .9;
}

a.home-link {
  text-decoration: none !important;
  color: #000;
}
a.home-link:hover {
  text-decoration: underline !important;
}
</style>