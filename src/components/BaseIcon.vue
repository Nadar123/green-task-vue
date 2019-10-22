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
  &:hover{
    color: #18c746;
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
