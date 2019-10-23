<template>
    <div class="icon-wrapper">
      <svg class='icon' :width="width" :height="height">
        <use v-bind="{'xlink:href':'/feather-sprite.svg#' + name}"/>
      </svg>
    </div>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 44
    },
    height: {
      type: [Number, String],
      default: 44
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 2rem;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover{
    color: #18c746;
  }
  svg{
   @media only screen and (max-width: 480px) {
     padding-left: 1rem;
   }
    @media only screen and (max-width: 480px) {
      width: 24px !important;
      height: 24px !important;
    }
  }
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>
