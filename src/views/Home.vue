<template>
  <div class="home">
    <div class="header">Tiffany&Co.</div>
    <div class="search-bar">
      <span>Search</span>
      <input v-model="keyword" />
    </div>
    <jewelry-list :keyword="keyword"/>
  </div>
</template>

<script>
// @ is an alias to /src
import JewelryList from '@/components/JewelryList.vue'

export default {
  name: 'Home',
  components: {
    JewelryList
  },
  data() {
    return {
      keyword: '',
    };
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1140px;
  padding: 0 48px;
  .header {
    padding: 30px;
    font-size: 20px;
    margin-bottom: 80px;
  }
  .search-bar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 48px;
    span {
      margin-right: 3px;
    }
    input {
      width: 150px;
      background: transparent;
      border: none;
      border-bottom: 1px solid #dadce0;
      &:hover {
        border-bottom: 1px dashed #00ca94;
      }
      &:focus {
        outline: none;
        border-bottom: 1px solid #00ca94;
      }
    } 
  }
}
</style>
