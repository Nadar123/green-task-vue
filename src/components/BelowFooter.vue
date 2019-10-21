<template>
  <div class="below-footer-content">
    <div class="green-invoice-wrapper-text" :style="{backgroundImage: `url(${greenLeaf})`}">
      <span class="rights-text"> {{ rights }} </span>
    </div>
    <div class="join-free-prodaction">
      <span class="green-prodaction-text"> {{ greenProdaction }} </span>
      <div class="space"></div>
      <a href="/" class="free-join"> {{ freeJoin }} </a>
    </div>
  </div>
</template>

<script>
import greenLeaf from '../assets/green_leaf.svg'
export default {
  data () {
    return {
      rights: 'חשבונית ירוקה @ 2019',
      greenProdaction: 'הפקת חשבוניות ומסמכים עסקיים באינטרנט',
      freeJoin: 'להצטרפות חינם',
      greenLeaf
    }
  }
}
</script>

<style lang="scss" scoped>
.below-footer-content{
  padding-top: 8rem;
  text-align: right;
  max-width: 75%;
  @media only screen and (max-width: 480px){
    max-width: 100%;
    padding: 20px
  }
  .green-invoice-wrapper-text{
    background-position: right;
    background-repeat: no-repeat;
    background-size: 13px;
    padding-right: 1rem;
  }
  .green-invoice-wrapper-text{
    margin-bottom: 0.5rem;
     @media only screen and (max-width: 480px) {
       text-align: center;
       background-position: 225px;

     }
    .rights-text{
      font-size: 13px;
      line-height: 13px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .join-free-prodaction{
    display: flex;
    flex-direction: row-reverse;
    @media only screen and (max-width: 480px) {
      padding-bottom: 2rem;
    }

    .green-prodaction-text{
      font-size: 13px;
      font-weight: 400;
      line-height: 13px;
      color: rgba(0, 0, 0, 0.7);
    }
    .space{
      flex:0.48;
    }
    .free-join{
      font-size: 13px;
      font-weight: 400;
      line-height: 13px;
      color: #18c746
    }
  }
}
</style>
