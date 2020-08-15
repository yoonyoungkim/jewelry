<template>
  <div class="jewelry-list">
    <div v-for="(jewelry, index) in filteredJewelryList" :key="index"
      class="box">
      <div class="image-container">
        <img :src="jewelry.imageUrl" />
      </div>
      <div class="contents">
        <div class="information">
          <div class="name">{{jewelry.name}}</div>
          <span class="size">{{jewelry.width}}cm x {{jewelry.height}}cm</span>
          <span class="price">{{jewelry.price}}</span>
        </div>
        <div class="seller">
          <span>by {{jewelry.seller}}</span>
          <div class="badge" :class="badgeClassName(jewelry.status)">{{jewelry.status}}</div>
        </div>
      </div>
      <div class="overlay" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'JewelryList',
  props: {
    keyword: String,
  },
  data() {
    return {
      jewelryList: [
        { id: 1, width: 10, height: 20, seller: 'Tiffany', status: '판매완료', name: 'Ball Pendant', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-hardwearball-pendant-60450765_993615_ED.jpg', price: '$12,000' },
        { id: 2, width: 10, height: 20, seller: 'Tiffany', status: '예약중', name: 'Link Bracelet', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-hardwearlink-bracelet-60715149_1013593_ED_M.jpg', price: '$16,000' },
        { id: 3, width: 10, height: 20, seller: 'Tiffany', status: '판매중', name: 'Graduated Link Necklace', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-hardweargraduated-link-necklace-38086766_993595_ED.jpg', price: '$11,500' },
        { id: 4, width: 10, height: 20, seller: 'Tiffany', status: '판매중', name: 'Wrap Bracelet', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-hardwearwrap-bracelet-37932825_988532_ED.jpg', price: '$7,800' },
        { id: 5, width: 10, height: 20, seller: 'Tiffany', status: '판매중', name: 'T1 Narrow Diamond Hinged Bangle', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-tt1-narrow-diamond-hinged-bangle-68315751_1008562_ED_M.jpg', price: '$9,000' },
        { id: 6, width: 10, height: 20, seller: 'Tiffany', status: '판매중', name: 'T1 Wide Diamond Ring', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-tt1-wide-diamond-ring-68169712_1010247_ED_M.jpg', price: '$5,000' },
        { id: 7, width: 10, height: 20, seller: 'Tiffany', status: '판매중', name: 'Smile Pendant', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-tsmile-pendant-35189432_1009333_ED.jpg', price: '$800' },
        { id: 8, width: 10, height: 20, seller: 'Tiffany', status: '판매중', name: 'T1 Narrow Diamond Ring', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-tiffany-tt1-narrow-diamond-ring-67795253_1010336_ED_M.jpg', price: '$1,500' },
        { id: 9, width: 10, height: 20, seller: 'Tiffany', status: '판매중', name: 'Diamonds by the Yard Earrings', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-elsa-perettidiamonds-by-the-yard-earrings-12818653_960210_ED_M.jpg', price: '$875' },
        { id: 10, width: 10, height: 20, seller: 'Tiffany', status: '판매중', name: 'Diamonds by the Yard Pendant', imageUrl: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/reader-tote-elsa-perettidiamonds-by-the-yard-pendant-10769213_937852_ED_M.jpg', price: '$625' },
      ]
    };
  },
  computed: {
    filteredJewelryList() {
      return this.jewelryList.filter((jewelry) => {
        return jewelry.name.toUpperCase().includes(this.keyword.toUpperCase()) || `${jewelry.width}cm x ${jewelry.heieght}cm`.includes(this.keyword)
      });
    },
  },
  methods: {
    badgeClassName(status) {
      if (status === '예약중') {
        return 'booked';
      }
      if (status === '판매완료') {
        return 'sold';
      }
      return '';
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.jewelry-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -20px;
  .box {
    position: relative;
    width: 241px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &:hover {
      .overlay {
        background-color: #243238;
        opacity: .3;
      }
    }
    .image-container {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .contents {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background-color: #ffffff;
      .information {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px;
        border-bottom: 1px solid #f4f7f6;
        .name {
          width: 100%;
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .size {
          font-size: 12px;
          font-weight: 300;
          color: #202121;
        }
        .price {
          font-size: 14px;
          font-weight: 500;
          color: #202121;
          align-self: flex-end;
        }
      }
      .seller {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        .badge {
          border-radius: 36px;
          height: 15px;
          padding: 1px 5px 0 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 10px;
          font-weight: 300;
          background-color: #00ca94;
          color: #ffffff;
          &.booked { background-color: #FF4E4E; }
        }
      }
    }
  }
}
</style>
