<template>
<div class="login">
  <md-field>
    <label>Initial Value</label>
    <md-input v-model="initial"></md-input>
  </md-field>
  <md-field>
    <label>Password toggle</label>
    <md-input v-model="password" type="password"></md-input>
  </md-field>
</div>
</template>

<script>
export default {
  name: 'Login',
};
</script>
<style lang="scss" scoped>

</style>
